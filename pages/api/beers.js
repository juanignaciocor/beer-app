import axios from "../../config/index";
//Ibamos a hacer esta parte pero no quedo tiempo !:D
export default async (req, res) => {
  try {
    let response = axios.get(req.query);
    res.status(200).json(response);
  } catch (err) {
    res.status(404).json({ message: "Error" });
  }
};
