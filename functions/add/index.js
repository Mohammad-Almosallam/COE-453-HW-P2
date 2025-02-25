const functions = require("@google-cloud/functions-framework");

functions.http("add", (req, res) => {
  const X = req.body.X;
  const Y = req.body.Y;
  if (X === undefined || Y === undefined) {
    if (X === undefined && Y === undefined) {
      res.status(400).send("both numbers (X and Y) are needed.");
    } else {
      const missingAttribute = X === undefined ? "X" : "Y";
      res.status(400).send(`missing attribute: ${missingAttribute}`);
    }
    return;
  }
  const result = parseFloat(X) + parseFloat(Y);
  const sumResponse = isNaN(result)
    ? "Provide two numbers."
    : `result is ${result}`;

  res.send(sumResponse);
});
