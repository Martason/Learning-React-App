import React, { useState } from "react";
import { Stack, Autocomplete, TextField, Button } from "@mui/material";

const MyAutocomplete = ({ options, handleSubmit }) => {
  const [value, setValue] = useState("");
//TODO implement this
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        id="pokemonSearchbar"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Pokemon name" />}
        noOptionsText={"No pokemon with that name could be found"}
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
      />
      <Button variant="contained" onClick={handleSubmit(value)}>
        Search
      </Button>
    </Stack>
  );
};

export default MyAutocomplete;
