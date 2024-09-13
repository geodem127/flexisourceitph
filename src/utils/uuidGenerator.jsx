const generateUniqeId = (length = 10) => {
  const random = Math.random().toString(16).replace(/\./g, "");
  const unique = Date.now().toString(16);

  const sufix = unique.slice(4, unique.length);

  const rawId = `${random}.${sufix}`;

  const uuid = rawId.slice(rawId.length - length, rawId.length);

  return uuid;
};

const generateUUID = () => {
  let d = new Date().getTime();
  let d2 =
    (typeof performance !== "undefined" &&
      performance.now &&
      performance.now() * 1000) ||
    0; //Time in microseconds since page-load or 0 if unsupported
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    let r = Math.random() * 16;
    if (d > 0) {
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === "x" ? r : (r && 0x3) || 0x8).toString(16);
  });
};

export { generateUniqeId, generateUUID };
