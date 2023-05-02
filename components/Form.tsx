"use client";

import Image from "next/image";
import React, { ChangeEvent, FormEvent, useState } from "react";
import myIcon from "../assets/images/icon-arrow.svg";

type myError = {
  error: boolean;
  errMsg: string;
};

const Form = () => {
  const [day, setDay] = useState<number>();
  const [month, setMonth] = useState<number>();
  const [year, setYear] = useState<number>();
  const [dayError, setDayError] = useState<myError>({
    error: false,
    errMsg: "",
  });
  const [monthError, setMonthError] = useState<myError>({
    error: false,
    errMsg: "",
  });
  const [yearError, setYearError] = useState<myError>({
    error: false,
    errMsg: "",
  });
  const [dateError, setDateError] = useState<boolean>(false);
  const [days, setDays] = useState<number>();
  const [months, setMonths] = useState<number>();
  const [years, setYears] = useState<number>();

  const animateCount = (num: number, func: (e: number) => void) => {
    let startValue = 0;
    let interval = 2000;
    let duration = Math.floor(interval / num);

    let counter = setInterval(() => {
      if (num === 0) {
        clearInterval(counter);
      }
      startValue += 1;
      func(startValue);
      if (startValue === num) {
        clearInterval(counter);
      }
    }, duration);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDateError(false);
    setDayError({ error: false, errMsg: "" });
    setMonthError({ error: false, errMsg: "" });
    setYearError({ error: false, errMsg: "" });
    setDays(0);
    setMonths(0);
    setYears(0);

    if (day && month && year) {
      const inputDate = new Date(year, month - 1, day);
      const today = new Date();
      let errorDate = false;

      if (inputDate.getDate() !== day) {
        setDayError({ error: true, errMsg: "Must be a valid date" });
        setDateError(true);
        errorDate = true;
      }

      if (day <= 0 || day > 31) {
        setDayError({ error: true, errMsg: "Must be a valid day" });
        setDateError(true);
        errorDate = true;
      }

      if (month <= 0 || month > 12) {
        setMonthError({ error: true, errMsg: "Must be a valid month" });
        setDateError(true);
        errorDate = true;
      }

      if (inputDate > today) {
        setYearError({ error: true, errMsg: "Must be in the past" });
        setDateError(true);
        errorDate = true;
      }

      if (!errorDate) {
        setDateError(false);
        setDayError({ error: false, errMsg: "" });
        setMonthError({ error: false, errMsg: "" });
        setYearError({ error: false, errMsg: "" });

        let years = today.getFullYear() - inputDate.getFullYear();
        let months = today.getMonth() - inputDate.getMonth();
        let days = today.getDate() - inputDate.getDate();

        // Adjust for negative months and days
        if (months < 0 || (months === 0 && days < 0)) {
          years--;
          months += days < 0 ? 11 : 12;
        }
        if (days < 0) {
          const monthDays = new Date(year, month - 1, 0).getDate();
          days += monthDays;
          months--;
        }

        animateCount(days, setDays);
        animateCount(months, setMonths);
        animateCount(years, setYears);
      }
    } else {
      if (!day) {
        setDayError({ error: true, errMsg: "This field is required" });
      }
      if (!month) {
        setMonthError({ error: true, errMsg: "This field is required" });
      }
      if (!year) {
        setYearError({ error: true, errMsg: "This field is required" });
      }
      setDateError(true);
      return;
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "day":
        setDay(parseInt(e.target.value));
        break;

      case "month":
        setMonth(parseInt(e.target.value));
        break;

      case "year":
        setYear(parseInt(e.target.value));
        break;

      default:
        break;
    }
  };

  return (
    <div className="p-4 pt-12 md:pt-8 md:p-8 pr-4 md:pr-16 bg-white shadow-2xl rounded-2xl md:rounded-3xl rounded-br-[8rem] md:rounded-br-[10rem] mx-auto my-auto w-full md:w-fit">
      <form
        onSubmit={handleSubmit}
        className="flex justify-evenly md:justify-start items-start gap-3 md:gap-6 mb-4 pb-16 md:pb-10 relative border-b border-b-neutral-200 w-full md:w-[37rem]"
      >
        <div className="flex flex-col items-start justify-start gap-2 ">
          <label
            htmlFor="day"
            className={`uppercase tracking-widest font-keezy-bold text-sm ${
              dateError ? "text-red-400" : "text-neutral-500"
            }`}
          >
            Day
          </label>
          <input
            type="number"
            id="day"
            name="day"
            value={day ?? ""}
            onChange={handleChange}
            placeholder="DD"
            className={`font-keezy-extrabold p-1.5 py-2 md:py-3 sm:p-2 md:p-3 w-24 sm:w-32 md:w-[8.5rem] rounded-lg text-lg sm:text-xl  md:text-2xl text-neutral-800  border ${
              dateError ? "border-red-200" : "border-neutral-200"
            }`}
          />
          {dayError.error && (
            <p className="text-red-400 font-keezy-italic text-xs">
              {dayError.errMsg}
            </p>
          )}
        </div>

        <div className="flex flex-col items-start justify-start gap-2">
          <label
            htmlFor="month"
            className={`uppercase tracking-widest font-keezy-bold text-sm ${
              dateError ? "text-red-400" : "text-neutral-500"
            }`}
          >
            Month
          </label>
          <input
            type="number"
            id="month"
            name="month"
            value={month ?? ""}
            onChange={handleChange}
            placeholder="MM"
            className={`font-keezy-extrabold p-1.5 py-2 md:py-3 sm:p-2 md:p-3 w-24 sm:w-32 md:w-[8.5rem] rounded-lg text-lg sm:text-xl  md:text-2xl text-neutral-800  border ${
              dateError ? "border-red-200" : "border-neutral-200"
            }`}
          />
          {monthError.error && (
            <p className="text-red-400 font-keezy-italic text-xs">
              {monthError.errMsg}
            </p>
          )}
        </div>

        <div className="flex flex-col items-start justify-start gap-2">
          <label
            htmlFor="year"
            className={`uppercase tracking-widest font-keezy-bold text-sm ${
              dateError ? "text-red-400" : "text-neutral-500"
            }`}
          >
            Year
          </label>
          <input
            type="number"
            id="year"
            name="year"
            value={year ?? ""}
            onChange={handleChange}
            placeholder="YYYY"
            className={`font-keezy-extrabold p-1.5 py-2 md:py-3 sm:p-2 md:p-3 w-24 sm:w-32 md:w-[8.5rem] rounded-lg text-lg sm:text-xl  md:text-2xl text-neutral-800  border ${
              dateError ? "border-red-200" : "border-neutral-200"
            }`}
          />
          {yearError.error && (
            <p className="text-red-400 font-keezy-italic text-xs">
              {yearError.errMsg}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="absolute w-16 h-16 right-[calc(50% + 32px)] -bottom-[32px] md:-right-[32px]  bg-violet-600 rounded-full p-4 text-center hover:opacity-70"
        >
          <Image
            alt="button"
            src={myIcon}
            width={46}
            height={44}
            className="rounded-full"
          />
        </button>
      </form>
      <div className="mt-14 md:mt-10 mb-12 md:mb-6">
        <h1 className="font-keezy-extrabolditalic text-neutral-900 text-6xl md:text-7xl">
          <span className=" text-violet-600">
            {years && years >= 0 ? years : "- -"}
          </span>{" "}
          years
        </h1>
        <h1 className="font-keezy-extrabolditalic text-neutral-900 text-6xl md:text-7xl">
          <span className=" text-violet-600">
            {months && months >= 0 ? months : "- -"}
          </span>{" "}
          months
        </h1>
        <h1 className="font-keezy-extrabolditalic text-neutral-900 text-6xl md:text-7xl">
          <span className=" text-violet-600">
            {days && days >= 0 ? days : "- -"}
          </span>{" "}
          days
        </h1>
      </div>
    </div>
  );
};

export default Form;
