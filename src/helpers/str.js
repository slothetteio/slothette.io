
export function padLeft(v, padding, len) {
  while (v.length < len) {
    v = padding + v
  }
  return v;
}

export function makeGroups(v, small, big) {
  let groups = [];
  let group = null;
  let subgroup  = null;

  Array.from(v).forEach((c, idx) => {
    // debugger;
    // every two elements push subgroup;
    if (!(idx % small)) {
      // not the first time;
      if (subgroup !== null) {
        group.push(subgroup);
      }
      subgroup = [];
    }
    if (!(idx % big)) {
      if (group !== null) {
        groups.push(group);
      }
      group = [];
    }
    subgroup.push(c);
    // debugger;
  });

  // is there anything left
  if (subgroup.length) {
    group.push(subgroup);
    groups.push(group);
  }
  return groups;
}
