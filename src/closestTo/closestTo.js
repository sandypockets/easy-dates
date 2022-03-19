export function closestTo(controlDate, args) {
  const cleanControlDate = Math.floor(new Date(controlDate).getTime());
  let closest;
  let closestIndex;
  let difference = 0;

  function assignValues(localDiff, closestDate, closestIdx) {
    difference = localDiff;
    closest = closestDate;
    closestIndex = closestIdx;
  }

  for (let i = 0; i < args.length; i++) {
    const localItem = Math.floor(new Date(args[i]).getTime());
    const localDifference = Math.abs(cleanControlDate - localItem); //?
    if (difference === 0) {
      assignValues(localDifference, args[i], i);
    } else {
      if (difference > localDifference) {
        assignValues(localDifference, args[i], i);
      }
    }
  }
  return { difference, closest, closestIndex };
}
