export const dateToString = (date: Date) => {
  return date
    .toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      weekday: 'short',
    })
    .replaceAll('/', '-');
};
