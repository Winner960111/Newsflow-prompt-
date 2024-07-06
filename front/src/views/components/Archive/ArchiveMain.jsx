import axios, { HttpStatusCode } from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiUrl } from "../../../config";
import { stdCategories } from "../ArticlesBoard/ArticlesBoard";

export default function ArchiveMain() {
  const [expand, setExpand] = useState();
  const [dates, setDates] = useState([]);

  useEffect(() => {
    axios.get(`${apiUrl}/api/v1/availableDates`).then((res) => {
      if (res.status === HttpStatusCode.Ok) {
        const tmpDates = res.data.dates.map((v) => {
          return new Date(v)
        })
        setDates(tmpDates)
      }
    })
  }, [])

  return (
    <div style={{ height: "100vh" }}>
      <div>
        {[...new Set(dates.map((v) => v.getFullYear()))].map((v) => {
          return (
            <>
              <p className="archive_main_heading" style={{ textDecoration: "underline", cursor: "pointer" }}>
                <h4>{v}</h4>
              </p>
              {[...new Set(dates.filter((date) => date.getFullYear() === v).map((date) => date.getMonth()))].map((month) => {
                return (
                  <div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <p
                        onClick={() => {
                          setExpand(month);
                        }}
                        style={{
                          borderBottom:
                            expand === month ? "2px solid red" : "",
                          width: "fit-content",
                          cursor: "pointer",
                        }}>
                        {new Date(2000, month).toLocaleString('default', { month: 'long' })}
                      </p>
                    </div>
                    {expand === month
                      ? stdCategories.map((category) => {
                          return (
                            <div onClick={() => {}}>
                              <div>
                                <Link
                                  to={`/AllDays/${v}-${month}`}
                                  state={{
                                    month: expand,
                                    categories: stdCategories,
                                    year: v,
                                    dates: dates.filter((date) => date.getFullYear() === v && date.getMonth() === month)
                                  }}
                                  style={{
                                    marginBottom: "auto",
                                  }}>
                                  {category}
                                </Link>
                              </div>
                            </div>
                          );
                        })
                      : null}
                  </div>
                );
              })}
            </>
          )
        })}
      </div>
    </div>
  );
}
