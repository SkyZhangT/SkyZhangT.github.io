import { ContactsOutlined } from "@material-ui/icons";

const getFormattedDate = () => {
  const newDate = new Date();
  let day = newDate.getUTCDate().toString();
  let month = (newDate.getUTCMonth() + 1).toString();
  let year = newDate.getUTCFullYear().toString();
  if (day.length < 2) day = "0" + day;
  if (month.length < 2) month = "0" + month;

  return year + "-" + month + "-" + day;
};

export default getFormattedDate;
