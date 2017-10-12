const lowerCaseNoSpace = string => {
  var space = /\s/g;
  return string.replace(space, '').toLowerCase();
};

export default lowerCaseNoSpace;
