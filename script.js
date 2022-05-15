const $lis = document.querySelectorAll("ul li");

$lis.forEach((Node) => {
  Node.addEventListener("mousedown", function (event) {
    const value = Node.innerText.trim();
    const $result = document.querySelector(".Result");
    // $result.innerText=value
    const resulText = $result.innerText.trim();

    if (
      resulText == "0" ||
      resulText == "undefined" ||
      resulText == "Infinity"
    ) {
      $result.innerText = "";
    }

    if (value == "=") {
      let solution = eval(resulText);
      $result.innerText = solution;
      return true;
    }

    if (value.toLowerCase() == "c") {
      $result.innerText = "";
      return true;
    }
    $result.append(value);
  });
});
