const rawQuery = properties => {
  return properties.map(a =>
    a.name !== "data"
      ? a.name +
        "{" +
        a.type.fields.map(
          b =>
            b.name +
            " " +
            (b.type.fields
              ? "{" +
                b.type.fields.map(
                  c =>
                    c.name +
                    " " +
                    (c.type && c.type.fields
                      ? "{" +
                        c.type.fields.map(
                          d =>
                            d.name +
                            " " +
                            (d.type && d.type.fields
                              ? "{" +
                                d.type.fields.map(
                                  e =>
                                    e.name +
                                    " " +
                                    (e.type && e.type.fields
                                      ? "{" +
                                        e.type.fields.map(
                                          f =>
                                            f.name +
                                            " " +
                                            (f.type && f.type.fields
                                              ? "{" +
                                                f.type.fields.map(
                                                  g =>
                                                    g.name +
                                                    " " +
                                                    (g.type && g.type.fields
                                                      ? "{" +
                                                        g.type.fields.map(
                                                          h => h.name + " "
                                                        ) +
                                                        "}"
                                                      : " ")
                                                ) +
                                                "}"
                                              : " ")
                                        ) +
                                        "}"
                                      : " ")
                                ) +
                                "}"
                              : " ")
                        ) +
                        "}"
                      : c.type.ofType && c.type.ofType.fields
                      ? "{" +
                        c.type.ofType.fields.map(
                          d =>
                            d.name +
                            " " +
                            (d.type && d.type.fields
                              ? "{" + d.type.fields.map(e => e.name + " ") + "}"
                              : " ")
                        ) +
                        "}"
                      : " ")
                ) +
                "}"
              : b.type.ofType && b.type.ofType.fields
              ? "{" +
                b.type.ofType.fields.map(
                  c =>
                    c.name +
                    " " +
                    (c.type && c.type.fields
                      ? "{" + c.type.fields.map(d => d.name + " ") + "}"
                      : " ")
                ) +
                "}"
              : " ")
        ) +
        "}"
      : a.type.ofType && a.type.ofType.fields
      ? "{" +
        a.type.ofType.fields.map(
          b =>
            b.name +
            " " +
            (b.type && b.type.fields
              ? "{" + b.type.fields.map(c => c.name + " ") + "}"
              : " ")
        ) +
        "}"
      : ""
  );
};

module.exports = rawQuery;
