export const convertStringToArrayOrLeaveIntact = (
  input: string,
): string[] | string | undefined => {
  if (!input) {
    return undefined;
  }
  if (input.includes(',')) {
    return input.split(',').map((item) => item.trim());
  }
  return input;
};
