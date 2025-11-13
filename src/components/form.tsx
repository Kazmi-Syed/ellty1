import React, { useEffect, useState } from "react";
import { Checkbox } from "./checkbox";
import { Line } from "./line";
import { Button } from "./button";

const Form = () => {
  const [allSelected, setAllSelected] = useState(false);
  const [p, setP] = useState([
    { label: "Page 1", isSelected: false },
    { label: "Page 2", isSelected: false },
    { label: "Page 3", isSelected: false },
    { label: "Page 4", isSelected: false },
  ]);

  useEffect(() => {
    p.forEach((item) => {
      if (item.isSelected === false) {
        setAllSelected(false);
        return;
      }
    });
  }, [p]);

  useEffect(() => {
    if (!allSelected) return;
    setP((prev) =>
      p.map((item) => {
        return { ...item, isSelected: true };
      })
    );
  }, [allSelected]);

  return (
    <form>
      <Checkbox
        label={"All Pages"}
        isSelected={allSelected}
        onClick={() => {
          setAllSelected((prev) => !prev);
        }}
      />

      <Line />
      {p.map((item, index) => (
        <Checkbox
          key={index}
          label={item.label}
          isSelected={item.isSelected}
          onClick={() => {
            setP((prev) =>
              prev.map((_item, _index) => {
                if (index === _index) {
                  return { ..._item, isSelected: !_item.isSelected };
                }
                return _item;
              })
            );
          }}
        />
      ))}
      <Line />
      <Button text="Done" />
    </form>
  );
};

export { Form };
