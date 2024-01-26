/* eslint-disable max-len */

import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getSearchWith } from "../../utils/searchHelper";
import { Product } from "../../types/product";

import "./Dropdown.scss";

type Props = {
  phones: Product[];
  arrayValues: string[];
  selectValue: number | string;
  param: string;
  title: string;
};

export const Dropdown: React.FC<Props> = ({
  phones,
  arrayValues,
  selectValue,
  param,
  title,
}) => {
  const [openSelect, setOpenSelect] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelectClick = () => {
    if (!openSelect) {
      setSearchParams(getSearchWith(searchParams, { page: "1" }));

      return setOpenSelect(true);
    }

    return setOpenSelect(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenSelect(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      {title}
      <button
        type="button"
        className="dropdown-value"
        onClick={handleSelectClick}
      >
        {selectValue}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.52864 3.52861C5.78899 3.26826 6.2111 3.26826 6.47145 3.52861L10.4714 7.52861C10.7318 7.78896 10.7318 8.21107 10.4714 8.47141L6.47145 12.4714C6.2111 12.7318 5.78899 12.7318 5.52864 12.4714C5.26829 12.2111 5.26829 11.789 5.52864 11.5286L9.05723 8.00001L5.52864 4.47141C5.26829 4.21107 5.26829 3.78896 5.52864 3.52861Z"
            fill="#B4BDC4"
          />
        </svg>
      </button>

      {!openSelect && (
        <ul
          className={classNames("dropdown-select", {
            "hidden-select": openSelect,
          })}
        >
          {arrayValues.map((item) => (
            <li className="dropdown-option" key={item}>
              <Link
                to={{
                  search: getSearchWith(searchParams, {
                    [param]: item !== "All" ? item : phones.length.toString(),
                  }),
                }}
                className="dropdown-link"
                onClick={() => setOpenSelect(true)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
