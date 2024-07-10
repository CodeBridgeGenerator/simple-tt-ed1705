const initilization = (init, fieldValues, setError) => {
  const error = {};
  Object.entries(init).forEach((val) => {
    // console.log(val);
    // console.log(val[1]);
    // console.log(typeof val[1]);
    if (typeof val[1] === "object" && fieldValues?.length > 0) {
      const query = {};
      query["name"] = val[1]?.value;
      const data = _.find(fieldValues, query);
      if (data) {
        const rec = { _id: data?.value };
        init[val[1].field] = rec;
      } else {
        // console.log(val[1]);
        error[val[1].field] = `missing value ${val[1]?.value}`;
      }
    } else init[val[0]] = val[1];
  });
  setError(error);
  return init;
};

export default initilization;
