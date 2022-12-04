export { pimp };
import { styles } from "./pimp-my-style.data.js";
let count = 0;
function pimp() {
  const button = document.querySelector("button");
  if (!button.classList.contains("unpimp")) {
    console.log("Добавляем класс");
    button.classList.add(styles[count]);
    count++;
    if (count === styles.length) {
      console.log("Конец");
      button.classList.add("unpimp");
    }
  }
  if (button.classList.contains("unpimp")) {
    console.log("Убураем класс");
    button.classList.remove(styles[count]);
    if (count === 0) {
      console.log("Убураем класс count 0");
      button.classList.remove("unpimp");
      button.classList.remove(styles[count]);
      count++;
    }
    count--;
  }
}
