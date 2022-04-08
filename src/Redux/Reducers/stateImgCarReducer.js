
const stateDefaultImg = "./img/img/imgRedCar.jpg";

export const stateImgCar = (state = stateDefaultImg, action) => {
    switch (action.type) {
      case "CHANGE_COLOR": {
        state = `./img/img/img${action.newColor}Car.jpg`;
        return state;
      }
      default:
        return state;
    }
  }