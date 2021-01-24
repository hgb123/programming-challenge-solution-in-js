var maximumTime = function (time) {
  const fillHour = (hh) => {
    let [t1, t2] = hh.split("");

    if (t1 === "?" && t2 === "?") {
      t1 = "2";
      t2 = "3";
    }

    if (t1 === "?") {
      if (Number(t2) > 3) {
        t1 = "1";
      } else {
        t1 = "2";
      }
    }

    if (t2 === "?") {
      if (Number(t1) <= 1) {
        t2 = "9";
      } else {
        t2 = "3";
      }
    }

    return t1 + t2;
  };
  const fillMin = (mm) => {
    let [t1, t2] = mm.split("");

    if (t1 === "?") {
      t1 = "5";
    }

    if (t2 === "?") {
      t2 = "9";
    }

    return t1 + t2;
  };
  const [hh, mm] = time.split(":");
  return fillHour(hh) + ":" + fillMin(mm);
};
