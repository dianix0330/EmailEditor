import frameActions from "./frameAction";
import templateAction from "./templateAction";

const createTemplate = (data) => {
  return async () => {
    const token = "hgk1cacvuz64";
    try {
      const res = await fetch(
        `https://front-end-test-http.onrender.com/template`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        }
      );
      const result = await res.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  };
};

const actions = {
  frameActions,
  templateAction,
  createTemplate,
};

export default actions;
