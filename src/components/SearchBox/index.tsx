import { useDispatch, useSelector } from "react-redux";
import { TextField, Select, MenuItem } from "@mui/material";

import { setFilter } from "../../common/redux/ProductSlice";
import { raitings } from "../../common/constant";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.product.filter);

  const handleFilter = (key: string, value: number) => {
    dispatch(setFilter({ ...filter, [key]: value }));
  };

  return (
    <div className="searchbox">
      <h2>Filter</h2>

      <div className="field">
        <label>Title</label>
        <TextField
          onChange={(e) => handleFilter("title", e.target.value)}
          value={filter.title}
          style={{ width: 500 }}
          type="text"
        />
      </div>

      <div className="field">
        <label>Price</label>
        <TextField
          onChange={(e) => handleFilter("price", +e.target.value)}
          value={filter.price}
          style={{ width: 500 }}
        />
      </div>

      <div className="field">
        <label>Raiting</label>
        <Select
          onChange={(e) => handleFilter("rating", +e.target.value)}
          value={filter.rating}
          style={{ width: 500 }}
        >
          {raitings.map((raiting, i) => (
            <MenuItem key={i} value={raiting}>
              {raiting}
            </MenuItem>
          ))}
        </Select>
      </div>
    </div>
  );
};
