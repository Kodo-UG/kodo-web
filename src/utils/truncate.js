function truncateText(text, maxLength) {
  if (text && typeof text === "string") {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  }
  return ""; // Handle undefined or null text gracefully
}
export default truncateText;
