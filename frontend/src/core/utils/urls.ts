
export function urlify(text: string): string {
  const urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
  return text.replace(urlRegex, (url, _, c) => {
    const url2 = c === 'www.' ? 'http://' + url : url;
    return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
  });
}
