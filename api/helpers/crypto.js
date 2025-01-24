const crypto = require("crypto");
const zlib = require("zlib");
const TurndownService = require("turndown");
require("dotenv").config();

const algorithm = "aes-256-ctr";
const secretKey = crypto
  .createHash("sha256")
  .update(String(process.env.ENCRYPTION_SECRET_KEY))
  .digest("base64")
  .slice(0, 32);

const encrypt = (text) => {
  const compressed = zlib.deflateSync(text);
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
  const encrypted = Buffer.concat([cipher.update(compressed), cipher.final()]);
  return `${iv.toString("base64url")}:${encrypted.toString("base64url")}`;
};

const decrypt = (hash) => {
  const [iv, content] = hash.split(":");
  const decipher = crypto.createDecipheriv(
    algorithm,
    secretKey,
    Buffer.from(iv, "base64url")
  );
  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(content, "base64url")),
    decipher.final(),
  ]);
  return zlib.inflateSync(decrypted).toString();
};

const convertToMarkdown = (html) => {
  const turndownService = new TurndownService({
    headingStyle: "atx",
    bulletListMarker: "-",
  });
  const markdown = turndownService.turndown(html);
  return markdown;
};

module.exports = { encrypt, decrypt, convertToMarkdown };
