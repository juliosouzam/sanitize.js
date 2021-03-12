function sanitize(value: string) {
  return value
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z\s\d]/g, '')
    .trim();
}

export { sanitize };
