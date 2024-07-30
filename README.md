# React + TypeScript + Vite

## Available Scripts

In the project directory, you can run:

### `npm dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm lint`

Launches the linters to check for any problems.\

eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0

### `npm start`

Runs the tailwind sync module.\

npx tailwindcss -i ./src/input.css -o ./src/output.css --watch

## Setup for deploy

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

header\_\_top
width: 1160px;
height: 50px;
margin-bottom: 49px;
display: flex;
justify-content: space-between;

    header__logo
    padding-top: 50px;
    margin-left: 140px;
    width: 220px;
    height: 35px;

    header__nav
    margin-top: 50px;
    width: 168px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    <!-- margin-right: 140px; -->

    workout__card-video
    width: 1160px;
    height: 639px;

    workout_card-title 
    <!-- font-family: var(--font-family); -->
    width: 810px;
    height: 119px;
    font-weight: 500;
    font-size: 60px;
    line-height: 100%;
    color: #000;

    workout_card-description
    <!-- font-family: var(--font-family); -->
    width: 810px;
    height: 35px;
    margin-bottom: 40px;
    font-weight: 400;
    font-size: 32px;
    line-height: 110%;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: #000;
    margin-bottom: 40px;

Открытие модального окна
const [isOpened, setIsOpened] = useState(false); // Состояние открытия модального окна
  function togglePopUp() {
    // Функция открытия модального окна
    setIsOpened(!isOpened);
  }

<div onClick={togglePopUp} className="header__user _hover02">
Сергей
</div>
{isOpened && (
<div
className="header__pop-user-set pop-user-set"
id="user-set-target"
>
<div className="pop-user-set">
<p className="pop-user-set__name">Сергей</p>
<p className="pop-user-set__mail">sergey.petrov96@mail.ru</p>
</div>
<button type="button" className="button__profile">
<a href="#popExit">Мой профиль</a>
</button>{" "}
<br />
<button type="button" className="button__exit">
<a href="#popExit">Выйти</a>
</button>
</div>
)}

{/* <div onClick={handleProgress} className="progress-count"> */}
          {/* {isOpened && ( */}
          {/* )} */}
          {/* </div> */}

