import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import {
  Button,
  Chip,
  Container,
} from "@mui/material";
import {
  Link,
  useNavigate,
} from "react-router-dom";
import TextSpan from "./textSpan";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { Category } from "../../reducers/main/main-api";

// images
import house from "../../assets/images/house-details/house.webp";
//  side columns
import caritelUp from "../../assets/images/house-details/side-columns/caritel-up.png";
import caritelLowTopLeft from "../../assets/images/house-details/side-columns/caritel-low-top-left.png";
import columnTopLeft from "../../assets/images/house-details/side-columns/column-top-left.png";
import columnBottomLeft from "../../assets/images/house-details/side-columns/column-bottom-left.png";
// doors
import arch from "../../assets/images/house-details/doors/arch.png";
import doorLock from "../../assets/images/house-details/doors/lock.png";
import doorPlatband from "../../assets/images/house-details/doors/platband.png";
import doorPlatbandBotom from "../../assets/images/house-details/doors/platband-bottom.png";
// central columns
import caritelUpTopLeft from "../../assets/images/house-details/central-columns/caritel-up-top-left.png";
import caritelUpTopRight from "../../assets/images/house-details/central-columns/caritel-up-top-right.png";
import columTopLeft from "../../assets/images/house-details/central-columns/column-top-left.png";
import columnTopRight from "../../assets/images/house-details/central-columns/column-top-right.png";
import caritelLowBottomRight from "../../assets/images/house-details/central-columns/caritel-low-bottom-right.png";
import caritelLowBottomLeft from "../../assets/images/house-details/central-columns/caritel-low-bottom-left.png";
import columnCentralBottomLeft from "../../assets/images/house-details/central-columns/column-bottom-left.png";
import columnCentralBottomRight from "../../assets/images/house-details/central-columns/column-bottom-right.png";
import caritelCentralUpBottomRight from "../../assets/images/house-details/central-columns/caritel-up-bottom-right.png";
import caritelCentralLowTopRight from "../../assets/images/house-details/central-columns/caritel-low-top-right.png";
import caritelUpBottomLeft from "../../assets/images/house-details/central-columns/caritel-up-bottom-left.png";
import caritelCentralLowTopLeft from "../../assets/images/house-details/central-columns/caritel-low-top-left.png";
// windows
import windowBottomRightLock from "../../assets/images/house-details/windows/wd-bt-rt-lock.png";
import windowBottomRightLedge from "../../assets/images/house-details/windows/wd-bt-rt-ledge.png";
import windowUpLedge from "../../assets/images/house-details/windows/верхнее окно верхняя часть оканя.png";
import windowBottomRightPlatband from "../../assets/images/house-details/windows/wd-bt-rt-platband.png";
import windowBottomLeftPlatband from "../../assets/images/house-details/windows/wd-bt-lt-platband.png";
import windowBottomLeftLedge from "../../assets/images/house-details/windows/wd-bt-lt-ledge.png";
import windowBottomLeftLock from "../../assets/images/house-details/windows/wd-bt-lt-lock.png";
import windowTopLeftLock from "../../assets/images/house-details/windows/wd-up-lt-lock.png";
import windowTopLeftPlatband from "../../assets/images/house-details/windows/wd-up-lt-platband.png";
import windowTopRightPlatband from "../../assets/images/house-details/windows/wd-up-rt-paltband.png";
import windowTopRightInsert from "../../assets/images/house-details/windows/insert-ct-tp-ws-rt.png";
import windowTopLeftInsert from "../../assets/images/house-details/windows/insert-ct-tp-ws-lt.png";
import windowTopRightRightInsert from "../../assets/images/house-details/windows/insert-tp-rt-wd-rt.png";

// belts
import img11 from "../../assets/detail/img_9.png";
import img12 from "../../assets/detail/img_11.png";
import img13 from "../../assets/detail/img_8.png";
import img14 from "../../assets/detail/img_12.png";
import img15 from "../../assets/detail/img_10.png";
import img81 from "../../assets/images/img_1.png";
import img82 from "../../assets/images/img.png";
import img83 from "../../assets/images/img_2.png";
import img84 from "../../assets/images/img_3.png";

// sary-tash
import saryTashTopLt from "../../assets/images/house-details/sary-tash/сары таш верх лево.png";
import saryTashTopRt from "../../assets/images/house-details/sary-tash/сары таш верх право.png";
import saryTashBtRt from "../../assets/images/house-details/sary-tash/сары ташниз право.png";
import saryTashBtLt from "../../assets/images/house-details/sary-tash/сары ташниз лево.png";
import saryTashTopCt from "../../assets/images/house-details/sary-tash/сары таш центр верх.png";
import saryTashBtCt from "../../assets/images/house-details/sary-tash/центр.png";

// side elem
import sideElemTop1 from "../../assets/images/house-details/side-elem/боковые экмент стены 0.png";
import sideElemTop2 from "../../assets/images/house-details/side-elem/боковые экмент стены 1.png";
import sideElemTop3 from "../../assets/images/house-details/side-elem/боковые экмент стены 2.png";
import sideElemTop4 from "../../assets/images/house-details/side-elem/боковые экмент стены 3.png";
import sideElemBt1 from "../../assets/images/house-details/side-elem/боковые экмент стены нижняя 0.png";

const House = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { categorys } = useSelector(
    (store) => store.main
  );
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(Category());
  }, []);
  return (
    <section>
      <Container maxWidth="xl">
        <Button
          color="primary"
          size="medium"
          onClick={() => navigate("/catalog")}
          sx={{
            display: "table",
            m: "63px 0 0 13px",
            boxShadow:
              "0px 1px 25px 5px rgba(255, 243, 220, 0.24)",
          }}
          variant="contained"
        >
          Смотреть в каталоге
        </Button>
        {categorys.slice(0, 1).map((el, idx) => (
          <div
            className={classes.blockImg}
            key={idx}
          >
            <div>
              <Link
                to={`/catalog/Сыры-Таш`}
                className="img sary-tash-top-lt"
              >
                <img
                  className="image"
                  src={saryTashTopLt}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Сары-Таш" />
                </p>
              </Link>
              <Link
                to={`/catalog/Сыры-Таш`}
                className="img sary-tash-top-rt"
              >
                <img
                  className="image"
                  src={saryTashTopRt}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Сары-Таш" />
                </p>
              </Link>
              <Link
                to={`/catalog/Сыры-Таш`}
                className="img sary-tash-bt-rt"
              >
                <img
                  className="image"
                  src={saryTashBtRt}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Сары-Таш" />
                </p>
              </Link>
              <Link
                to={`/catalog/Сыры-Таш`}
                className="img sary-tash-bt-lt"
              >
                <img
                  className="image"
                  src={saryTashBtLt}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Сары-Таш" />
                </p>
              </Link>
              <Link
                to={`/catalog/Сыры-Таш`}
                className="img sary-tash-bt-ct"
              >
                <img
                  className="image"
                  src={saryTashBtCt}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Сары-Таш" />
                </p>
              </Link>
              <Link
                to={`/catalog/Сыры-Таш`}
                className="img sary-tash-tp-ct"
              >
                <img
                  className="image"
                  src={saryTashTopCt}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Сары-Таш" />
                </p>
              </Link>
            </div>

            <div>
              <Link
                to={`/catalog/Угловые камни UK`}
                className="img side-el-tp-1 up"
              >
                <img
                  className="image"
                  src={sideElemTop1}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Угловые камни UK" />
                </p>
              </Link>
              <Link
                to={`/catalog/Угловые камни UK`}
                className="img side-el-tp-2 up"
              >
                <img
                  className="image"
                  src={sideElemTop2}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Угловые камни UK" />
                </p>
              </Link>
              <Link
                to={`/catalog/Угловые камни UK`}
                className="img side-el-tp-3 up"
              >
                <img
                  className="image"
                  src={sideElemTop3}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Угловые камни UK" />
                </p>
              </Link>
              <Link
                to={`/catalog/Угловые камни UK`}
                className="img side-el-tp-4 up"
              >
                <img
                  className="image"
                  src={sideElemTop4}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Угловые камни UK" />
                </p>
              </Link>
              <Link
                to={`/catalog/Угловые камни UK`}
                className="img side-el-bt-1 up"
              >
                <img
                  className="image"
                  src={sideElemBt1}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Угловые камни UK" />
                </p>
              </Link>
              <Link
                to={`/catalog/Угловые камни UK`}
                className="img side-el-bt-2 up"
              >
                <img
                  className="image"
                  src={sideElemBt1}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Угловые камни UK" />
                </p>
              </Link>
              <Link
                to={`/catalog/Угловые камни UK`}
                className="img side-el-bt-3 up"
              >
                <img
                  className="image"
                  src={sideElemBt1}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Угловые камни UK" />
                </p>
              </Link>
              <Link
                to={`/catalog/Угловые камни UK`}
                className="img side-el-bt-4 up"
              >
                <img
                  className="image"
                  src={sideElemBt1}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Угловые камни UK" />
                </p>
              </Link>
              <Link
                to={`/catalog/Угловые камни UK`}
                className="img side-el-bt-5 up"
              >
                <img
                  className="image"
                  src={sideElemBt1}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Угловые камни UK" />
                </p>
              </Link>
            </div>

            <div>
              <Link
                to={`/catalog/Короны KR`}
                className="img Aimg11"
              >
                <img
                  className="image"
                  src={img11}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Короны KR" />
                </p>
              </Link>
              <Link
                to={`/catalog/Короны KR`}
                className="img Aimg12"
              >
                <img
                  className="image"
                  src={img12}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Короны KR" />
                </p>
              </Link>
              <Link
                to={`/catalog/Короны KR`}
                className="img Aimg14"
              >
                <img
                  className="image"
                  src={img14}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Короны KR" />
                </p>
              </Link>
              <Link
                to={`/catalog/Короны KR`}
                className="img Aimg13"
              >
                <img
                  className="image"
                  src={img13}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Короны KR" />
                </p>
              </Link>
              <Link
                to={`/catalog/Короны KR`}
                className="img Aimg15"
              >
                <img
                  className="image"
                  src={img15}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Короны KR" />
                </p>
              </Link>
            </div>

            <div>
              <Link
                to={`/catalog/ Лицовой и угловой капитель L; LP`}
                className="img d1 up"
              >
                <img
                  className="image"
                  src={caritelUp}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title=" Лицовой и угловой капитель L; LP" />
                </p>
              </Link>
              <Link
                to={`/catalog/Лицовой и угловой капитель L; LP`}
                className="img d1_down up"
              >
                <img
                  className="image"
                  src={caritelLowTopLeft}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Лицовой и угловой капитель L; LP" />
                </p>
              </Link>
              <Link
                to={`/catalog/Пилястра KN`}
                className="img d1_column"
              >
                <img
                  className="image"
                  src={columnTopLeft}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Пилястра KN" />
                </p>
              </Link>
            </div>

            <div>
              <Link
                to={`/catalog/ Лицовой и угловой капитель L; LP`}
                className="img d2-up up"
              >
                <img
                  className="image"
                  src={caritelUp}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title=" Лицовой и угловой капитель L; LP" />
                </p>
              </Link>
              <Link
                to={`/catalog/Пилястра KN`}
                className="img d2-column"
              >
                <img
                  className="image"
                  src={columnBottomLeft}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Пилястра KN" />
                </p>
              </Link>
            </div>

            <div>
              <Link
                to={`/catalog/ Лицовой и угловой капитель L; LP`}
                className="img d3 up"
              >
                <img
                  className="image"
                  src={caritelUp}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title=" Лицовой и угловой капитель L; LP" />
                </p>
              </Link>
              <Link
                to={`/catalog/Лицовой и угловой капитель L; LP`}
                className="img d3_down up"
              >
                <img
                  className="image"
                  src={caritelLowTopLeft}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Лицовой и угловой капитель L; LP" />
                </p>
              </Link>
              <Link
                to={`/catalog/Пилястра KN`}
                className="img d3_column"
              >
                <img
                  className="image"
                  src={columnTopLeft}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Пилястра KN" />
                </p>
              </Link>
            </div>

            <div>
              <Link
                to={`/catalog/ Лицовой и угловой капитель L; LP`}
                className="img d4-up up"
              >
                <img
                  className="image"
                  src={caritelUp}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title=" Лицовой и угловой капитель L; LP" />
                </p>
              </Link>
              <Link
                to={`/catalog/Пилястра KN`}
                className="img d4-column"
              >
                <img
                  className="image"
                  src={columnBottomLeft}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Пилястра KN" />
                </p>
              </Link>
            </div>

            <div className="d5-parent">
              <Link
                to={`/catalog/Арка`}
                className="img d5 up"
              >
                <img
                  className="image"
                  src={arch}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Арка" />
                </p>
              </Link>
              <Link
                to={`/catalog/Нижние ставки NV`}
                className="img d5-insert z5"
              >
                <img
                  className="image"
                  src={windowTopRightInsert}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Нижние ставки NV" />
                </p>
              </Link>
              <Link
                to={`/catalog/Нижние ставки NV`}
                className="img d5-insert2 z5"
              >
                <img
                  className="image"
                  src={windowTopLeftInsert}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Нижние ставки NV" />
                </p>
              </Link>
              <Link
                to={`/catalog/Замковые камни ZK`}
                className="img d5-close up"
              >
                <img
                  className="image"
                  src={doorLock}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Замковые камни ZK" />
                </p>
              </Link>
              <Link
                to={`/catalog/Прямые наличники PN`}
                className="img d5-columns up"
              >
                <img
                  className="image"
                  src={doorPlatband}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Прямые наличники PN" />
                </p>
              </Link>
            </div>

            <div className="d5-parent down">
              <Link
                to={`/catalog/Арка`}
                className="img d5 up"
              >
                <img
                  className="image"
                  src={arch}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Арка" />
                </p>
              </Link>
              <Link
                to={`/catalog/Нижние ставки NV`}
                className="img d5-insert z5"
              >
                <img
                  className="image"
                  src={windowTopRightInsert}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Нижние ставки NV" />
                </p>
              </Link>
              <Link
                to={`/catalog/Нижние ставки NV`}
                className="img d5-insert2 z5"
              >
                <img
                  className="image"
                  src={windowTopLeftInsert}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Нижние ставки NV" />
                </p>
              </Link>
              <Link
                to={`/catalog/Замковые камни ZK`}
                className="img d5-close up"
              >
                <img
                  className="image"
                  src={doorLock}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Замковые камни ZK" />
                </p>
              </Link>
              <Link
                to={`/catalog/Прямые наличники PN`}
                className="img d5-columns up"
              >
                <img
                  className="image"
                  src={doorPlatbandBotom}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Прямые наличники PN" />
                </p>
              </Link>
            </div>
            <div>
              <Link
                to={`/catalog/ Лицовой и угловой капитель L; LP`}
                className="img d7"
              >
                <img
                  className="image"
                  src={caritelUpTopLeft}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title=" Лицовой и угловой капитель L; LP" />
                </p>
              </Link>
              <Link
                to={`/catalog/ Лицовой и угловой капитель L; LP`}
                className="img d72"
              >
                <img
                  className="image"
                  src={caritelUpTopRight}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title=" Лицовой и угловой капитель L; LP" />
                </p>
              </Link>
              <Link
                to={`/catalog/Пилястра KN`}
                className="img d7-column-left"
              >
                <img
                  className="image"
                  src={columTopLeft}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Пилястра KN" />
                </p>
              </Link>
              <Link
                to={`/catalog/Пилястра KN`}
                className="img d7-column-right"
              >
                <img
                  className="image"
                  src={columnTopRight}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Пилястра KN" />
                </p>
              </Link>
              <Link
                to={`/catalog/ Лицовой и угловой капитель L; LP`}
                className="img d71 up"
              >
                <img
                  className="image"
                  src={caritelUpBottomLeft}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title=" Лицовой и угловой капитель L; LP" />
                </p>
              </Link>
              <Link
                to={`/catalog/Лицовой и угловой капитель L; LP`}
                className="img d73 up"
              >
                <img
                  className="image"
                  src={caritelCentralLowTopLeft}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Лицовой и угловой капитель L; LP" />
                </p>
              </Link>
              <Link
                to={`/catalog/Лицовой и угловой капитель L; LP`}
                className="img d74 up"
              >
                <img
                  className="image"
                  src={caritelCentralLowTopRight}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Лицовой и угловой капитель L; LP" />
                </p>
              </Link>
              <Link
                to={`/catalog/ Лицовой и угловой капитель L; LP`}
                className="img d75 up"
              >
                <img
                  className="image"
                  src={
                    caritelCentralUpBottomRight
                  }
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title=" Лицовой и угловой капитель L; LP" />
                </p>
              </Link>
              <Link
                to={`/catalog/Пилястра KN`}
                className="img d7-column-bottom-left"
              >
                <img
                  className="image"
                  src={columnCentralBottomLeft}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Пилястра KN" />
                </p>
              </Link>
              <Link
                to={`/catalog/Пилястра KN`}
                className="img d7-column-bottom-right"
              >
                <img
                  className="image"
                  src={columnCentralBottomRight}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Пилястра KN" />
                </p>
              </Link>
              <Link
                to={`/catalog/Лицовой и угловой капитель L; LP`}
                className="img d7-bottom"
              >
                <img
                  className="image"
                  src={caritelLowBottomLeft}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Лицовой и угловой капитель L; LP" />
                </p>
              </Link>
              <Link
                to={`/catalog/Лицовой и угловой капитель L; LP`}
                className="img d7-bottom2"
              >
                <img
                  className="image"
                  src={caritelLowBottomRight}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Лицовой и угловой капитель L; LP" />
                </p>
              </Link>
            </div>
            <div>
              <Link
                to={`/catalog/Замковые камни ZK`}
                className="img wd-bt-rt-lock"
                up-2
              >
                <img
                  className="image"
                  src={windowBottomRightLock}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Замковые камни ZK" />
                </p>
              </Link>
              <Link
                to={`/catalog/${categorys[1].title}`}
                className="img wd-bt-rt-insert z5"
                up-2
              >
                <img
                  className="image"
                  src={windowTopRightRightInsert}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Нижние ставки NV" />
                </p>
              </Link>
              <Link
                to={`/catalog/${categorys[1].title}`}
                className="img wd-bt-rt-insert2 z5"
                up-2
              >
                <img
                  className="image"
                  src={windowTopLeftInsert}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Нижние ставки NV" />
                </p>
              </Link>
              <Link
                to={`/catalog/Карнизы KN`}
                className="img wd-ledge-bt-rt up"
              >
                <img
                  className="image"
                  src={windowUpLedge}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Карнизы KN" />
                </p>
              </Link>
              <Link
                to={`/catalog/Подоконники NP`}
                className="img wd-bt-rt-ledge up"
              >
                <img
                  className="image"
                  src={windowBottomRightLedge}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Подоконники NP" />
                </p>
              </Link>
              <Link
                to={`/catalog/Подоконники NP`}
                className="img wd-bt-rt-platband up"
              >
                <img
                  className="image"
                  src={windowBottomRightPlatband}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Прямые наличники PN" />
                </p>
              </Link>

              {/* <Link
                to={`/catalog/${categorys[1].title}`}
                className="img d4-column"
              >
                <img
                  className="image"
                  src={columnBottomLeft} alt="" />
                <p className="image_span">
                  <TextSpan title="Пилястра KN" />
                </p>
              </Link> */}
            </div>
            <div>
              <Link
                to={`/catalog/Замковые камни ZK`}
                className="img wd-bt-lt-lock up-2"
              >
                <img
                  className="image"
                  src={windowBottomLeftLock}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Замковые камни ZK" />
                </p>
              </Link>

              <Link
                to={`/catalog/Нижние ставки NV`}
                className="img wd-bt-lt-insert z5"
                up-2
              >
                <img
                  className="image"
                  src={windowTopLeftInsert}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Нижние ставки NV" />
                </p>
              </Link>
              <Link
                to={`/catalog/Нижние ставки NV`}
                className="img wd-bt-lt-insert2 z5"
                up-2
              >
                <img
                  className="image"
                  src={windowTopRightInsert}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Нижние ставки NV" />
                </p>
              </Link>

              <Link
                to={`/catalog/Карнизы KN`}
                className="img wd-ledge-bt-lt up"
              >
                <img
                  className="image"
                  src={windowUpLedge}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Карнизы KN" />
                </p>
              </Link>
              <Link
                to={`/catalog/Подоконники NP`}
                className="img wd-bt-lt-ledge up"
              >
                <img
                  className="image"
                  src={windowBottomRightLedge}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Подоконники NP" />
                </p>
              </Link>
              <Link
                to={`/catalog/Прямые наличники PN`}
                className="img wd-bt-lt-platband up"
              >
                <img
                  className="image"
                  src={windowBottomLeftPlatband}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Прямые наличники PN" />
                </p>
              </Link>

              {/* <Link
                to={`/catalog/${categorys[1].title}`}
                className="img d4-column"
              >
                <img
                  className="image"
                  src={columnBottomLeft} alt="" />
                <p className="image_span">
                  <TextSpan title="Пилястра KN" />
                </p>
              </Link> */}
            </div>
            <div>
              <Link
                to={`/catalog/Замковые камни ZK`}
                className="img wd-up-lt-lock up-2"
              >
                <img
                  className="image"
                  src={windowTopLeftLock}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Замковые камни ZK" />
                </p>
              </Link>
              <Link
                to={`/catalog/Нижние ставки NV`}
                className="img wd-up-lt-insert z5"
                up-2
              >
                <img
                  className="image"
                  src={windowTopLeftInsert}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Нижние ставки NV" />
                </p>
              </Link>
              <Link
                to={`/catalog/Нижние ставки NV`}
                className="img wd-up-lt-insert2 z5"
                up-2
              >
                <img
                  className="image"
                  src={windowTopRightInsert}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Нижние ставки NV" />
                </p>
              </Link>
              <Link
                to={`/catalog/Карнизы KN`}
                className="img wd-ledge-tp-lt up"
              >
                <img
                  className="image"
                  src={windowUpLedge}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Карнизы KN" />
                </p>
              </Link>
              <Link
                to={`/catalog/Прямые наличники PN`}
                className="img wd-up-lt-platband up"
              >
                <img
                  className="image"
                  src={windowTopLeftPlatband}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Прямые наличники PN" />
                </p>
              </Link>
            </div>
            <div>
              <Link
                to={`/catalog/Нижние ставки NV`}
                className="img wd-up-rt-insert z5"
                up-2
              >
                <img
                  className="image"
                  src={windowTopLeftInsert}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Нижние ставки NV" />
                </p>
              </Link>
              <Link
                to={`/catalog/Нижние ставки NV`}
                className="img wd-up-rt-insert2 z5"
                up-2
              >
                <img
                  className="image"
                  src={windowTopRightInsert}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Нижние ставки NV" />
                </p>
              </Link>
              <Link
                to={`/catalog/Замковые камни ZK`}
                className="img wd-up-rt-lock up-2"
              >
                <img
                  className="image"
                  src={windowBottomLeftLock}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Замковые камни ZK" />
                </p>
              </Link>
              <Link
                to={`/catalog/Карнизы KN`}
                className="img wd-ledge-tp-rt up"
              >
                <img
                  className="image"
                  src={windowUpLedge}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Карнизы KN" />
                </p>
              </Link>
              <Link
                to={`/catalog/Прямые наличники PN`}
                className="img wd-up-rt-platband up"
              >
                <img
                  className="image"
                  src={windowTopRightPlatband}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Прямые наличники PN" />
                </p>
              </Link>
            </div>
            <div>
              <Link
                to={`/catalog/Пояс KR`}
                className="img Aimg91"
              >
                <img
                  className="image"
                  src={img81}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Пояс KR" />
                </p>
              </Link>
              <Link
                to={`/catalog/Пояс KR`}
                className="img Aimg92"
              >
                <img
                  className="image"
                  src={img82}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Пояс KR" />
                </p>
              </Link>
              <Link
                to={`/catalog/Пояс KR`}
                className="img Aimg93"
              >
                <img
                  className="image"
                  src={img83}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Пояс KR" />
                </p>
              </Link>
              <Link
                to={`/catalog/Пояс KR`}
                className="img Aimg94"
              >
                <img
                  className="image"
                  src={img84}
                  alt=""
                />
                <p className="image_span">
                  <TextSpan title="Пояс KR" />
                </p>
              </Link>
            </div>
            <img
              className="house"
              src={house}
              alt=""
            />
            <div className="homeDv" />
          </div>
        ))}
      </Container>
    </section>
  );
};

export default House;
const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Manrope",
    fontSize: "50px",
    fontWeight: "600",
    marginTop: "100px",
    marginBottom: "-60px",
    [theme.breakpoints.down(768.1)]: {
      fontFamily: "Manrope",
      fontSize: "40px",
      fontWeight: "600",
      marginTop: "20px",
      marginBottom: "-70px",
    },
    [theme.breakpoints.down(576.1)]: {
      fontFamily: "Manrope",
      fontSize: "28px",
      fontWeight: "600",
      marginTop: "20px",
      marginBottom: "-70px",
    },
    [theme.breakpoints.down(425.1)]: {
      fontFamily: "Manrope",
      fontSize: "28px",
      fontWeight: "600",
      marginTop: "0",
      marginBottom: "-70px",
    },
    [theme.breakpoints.down(375.1)]: {
      fontFamily: "Manrope",
      fontSize: "24px",
      fontWeight: "600",
      marginTop: "0",
      marginBottom: "-70px",
    },
  },
  blockImg: {
    position: "relative",
    paddingTop: "100px",
    width: "100%",
    height: "100%",

    "& .up": {
      zIndex: "24!important",
    },
    "& .up-2": {
      zIndex: "25!important",
    },

    "& .z5": {
      zIndex: "26!important",
    },

    "& .homeDv": {
      boxShadow:
        "inset 0 -53px 80px 85px #1D1E23",
      width: "104%",
      height: "90%",
      position: "absolute",
      top: "10%",
      left: "-2%",
      zIndex: "2",
      [theme.breakpoints.down(576.1)]: {
        display: "none",
      },
    },
    "& .house": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: "0.7",
    },
    "& .img": {
      objectFit: "cover",
      opacity: "0.1",
      transition: "0.4s",
      position: "absolute",
      zIndex: "23",
      [theme.breakpoints.down(1024.1)]: {
        opacity: "0",
        "&:hover": {
          opacity: 1,
          transform: "scale(1.003)",
        },
      },
      [theme.breakpoints.down(992.1)]: {
        display: "none",
      },
      "&:hover": {
        opacity: 1,
        transform: "scale(1.008)",
      },
      "&:hover .image_span": {
        opacity: 1,
        transform:
          "scaleX(1) translate( 80px ,-20px)",
      },
    },
    "& .image_span": {
      position: "absolute",
      borderRadius: "10px",
      padding: "10px",
      background: "#D0C5B7",
      opacity: "0",
      top: "-20px",
      color: "black",
      left: "20px",
      transform: "scaleX(0) translate(-40px,0)",
      overFlow: "hidden",
      transition: "0.4s",
      [theme.breakpoints.down(992.1)]: {
        display: "none",
      },
    },
    "& .image": {
      width: "100%",
      objectFit: "cover",
    },
    "& .Aimg11": {
      width: "29%",
      left: "13%",
      marginTop: "17.8%",
    },
    "& .Aimg12": {
      width: "4.5%",
      left: "36.5%",
      marginTop: "12.6%",
    },
    "& .Aimg14": {
      width: "6.5%",
      left: "61.3%",
      marginTop: "13%",
    },
    "& .Aimg13": {
      width: "31%",
      left: "36.2%",
      marginTop: "12.3%",
    },
    "& .Aimg15": {
      width: "27%",
      left: "61.7%",
      marginTop: "17.5%",
    },

    "& .d3": {
      left: "81.3%",
      width: "6.6%",
      marginTop: "17.8%",
    },

    "& .d3_down": {
      left: "80.6%",
      width: "7.6%",
      marginTop: "37%",
    },

    "& .d3_column": {
      left: "80%",
      width: "8.1%",
      marginTop: "19.8%",
    },

    "& .d2-up": {
      left: "14.3%",
      width: "6.7%",
      marginTop: "39%",
    },

    "& .d2-column": {
      left: "14.2%",
      width: "6.9%",
      marginTop: "42.7%",
    },

    "& .d1": {
      left: "14.4%",
      width: "6.6%",
      marginTop: "17.8%",
    },

    "& .d1_down": {
      left: "13.7%",
      width: "7.6%",
      marginTop: "36.8%",
    },

    "& .d1_column": {
      left: "12.8%",
      width: "8.6%",
      marginTop: "19.4%",
    },

    "& .d4-up": {
      left: "81.4%",
      width: "6.7%",
      marginTop: "39%",
    },

    "& .d4-column": {
      left: "81.1%",
      width: "6.9%",
      marginTop: "42.8%",
    },

    "& .d5-parent": {
      position: "absolute",
      left: "41%",
      width: "20%",
      marginTop: "15%",

      "&.down": {
        marginTop: "36%",
        "& .d5-columns": {
          left: "11.1%",
          width: "81.9%",
          marginTop: "61.8%",
        },

        "& .d5-insert": {
          width: "12.5%",
          left: "74.2%",
          marginTop: "54.9%",
        },

        "& .d5-insert2": {
          width: "12.5%",
          left: "18.4%",
          marginTop: "56.9%",
        },
      },
      "& .d5-columns": {
        left: "21.1%",
        width: "62.9%",
        marginTop: "61.3%",
      },

      "& .d5": {
        left: "19%",
        width: "68%",
        marginTop: "30%",
      },

      "& .d5-insert": {
        width: "12.5%",
        left: "74.2%",
        marginTop: "54.9%",
      },

      "& .d5-insert2": {
        width: "12.5%",
        left: "18.4%",
        marginTop: "56.9%",
      },

      "& .d5-close": {
        left: "38%",
        width: "33%",
        marginTop: "22%",
      },
    },

    "& .d7": {
      left: "39.6%",
      width: "5%",
      marginTop: "15.3%",
    },

    "& .d71": {
      left: "38.33%",
      width: "7%",
      marginTop: "37.8%",
    },

    "& .d72": {
      left: "58.1%",
      width: "6.5%",
      marginTop: "15.3%",
    },

    "& .d73": {
      left: "38.8%",
      width: "6.2%",
      marginTop: "35.6%",
    },

    "& .d74": {
      left: "59.4%",
      width: "4.7%",
      marginTop: "35.6%",
    },

    "& .d75": {
      left: "58.1%",
      width: "6.7%",
      marginTop: "37.6%",
    },

    "& .d7-column-right": {
      left: "59.6%",
      width: "4.9%",
      marginTop: "17.7%",
    },

    "& .d7-column-left": {
      left: "39.6%",
      width: "5.1%",
      marginTop: "18.7%",
    },

    "& .d7-column-bottom-right": {
      left: "59.7%",
      width: "4.2%",
      marginTop: "40.3%",
    },

    "& .d7-column-bottom-left": {
      left: "39.9%",
      width: "4.3%",
      marginTop: "39.1%",
    },

    "& .d7-bottom": {
      left: "39.9%",
      width: "4.5%",
      marginTop: "52.9%",
    },

    "& .d7-bottom2": {
      left: "59.3%",
      width: "4.5%",
      marginTop: "51.8%",
    },

    "& .Aimg91": {
      width: "10%",
      left: "6%",
      marginTop: "42%",
    },
    "& .Aimg92": {
      width: " 25%",
      left: "15.4%",
      marginTop: "39.3%",
    },
    "& .Aimg93": {
      width: "16.5%",
      left: "43.5%",
      marginTop: "39%",
    },
    "& .Aimg94": {
      width: "23.8%",
      left: "63%",
      marginTop: "39.6%",
    },

    "& .wd-bt-rt-lock": {
      width: "6.7%",
      left: "68.4%",
      marginTop: "39.6%",
    },

    "& .wd-bt-rt-insert": {
      width: "2.5%",
      left: "76.2%",
      marginTop: "43.9%",
    },

    "& .wd-bt-rt-insert2": {
      width: "2.5%",
      left: "64.7%",
      marginTop: "43.9%",
    },

    "& .wd-bt-rt-ledge": {
      width: "15.6%",
      left: "64.3%",
      marginTop: "56.9%",
    },
    "& .wd-bt-rt-platband": {
      width: "14.1%",
      left: "64.7%",
      marginTop: "44.4%",
    },
    "& .wd-bt-lt-lock": {
      width: "5.9%",
      left: "27.3%",
      marginTop: "40.7%",
    },

    "& .wd-bt-lt-insert": {
      width: "2.4%",
      left: "23.1%",
      marginTop: "43.9%",
    },

    "& .wd-bt-lt-insert2": {
      width: "2.4%",
      left: "34.9%",
      marginTop: "43.8%",
    },

    "& .wd-bt-lt-ledge": {
      width: "15.6%",
      left: "22.7%",
      marginTop: "56.7%",
    },
    "& .wd-bt-lt-platband": {
      width: "14.8%",
      left: "22.6%",
      marginTop: "44.5%",
    },
    "& .wd-up-lt-platband": {
      width: "15.2%",
      left: "22.7%",
      marginTop: "24.1%",
    },

    "& .wd-up-lt-insert": {
      width: "2.3%",
      left: "23.2%",
      marginTop: "23.6%",
    },

    "& .wd-up-lt-insert2": {
      width: "2.3%",
      left: "34.9%",
      marginTop: "23.4%",
    },

    "& .wd-up-lt-lock": {
      width: "7.7%",
      left: "26.7%",
      marginTop: "20.5%",
    },

    "& .wd-ledge-tp-rt": {
      width: "15.2%",
      left: "22.5%",
      marginTop: "22.2%",
    },

    "& .wd-ledge-tp-lt": {
      width: "15.2%",
      left: "64.1%",
      marginTop: "22.2%",
    },

    "& .wd-ledge-bt-lt": {
      width: "15.2%",
      left: "22.5%",
      marginTop: "42.6%",
    },

    "& .wd-ledge-bt-rt": {
      width: "15.2%",
      left: "64.1%",
      marginTop: "42.6%",
    },

    "& .wd-up-rt-platband": {
      width: "15.7%",
      left: "64.1%",
      marginTop: "24.4%",
    },

    "& .wd-up-rt-insert": {
      width: "2.3%",
      left: "64.8%",
      marginTop: "23.7%",
    },

    "& .wd-up-rt-insert2": {
      width: "2.3%",
      left: "76.4%",
      marginTop: "23.5%",
    },

    "& .wd-up-rt-lock": {
      width: "5.7%",
      left: "69.1%",
      marginTop: "20.6%",
    },
    "& .sary-tash-top-lt": {
      width: "24.7%",
      left: "17.3%",
      marginTop: "19.3%",
    },
    "& .sary-tash-top-rt": {
      width: "22.9%",
      left: "61.1%",
      marginTop: "19.2%",
    },
    "& .sary-tash-bt-rt": {
      width: "22.1%",
      left: "61.2%",
      marginTop: "41.3%",
    },
    "& .sary-tash-bt-lt": {
      width: "23.9%",
      left: "17.5%",
      marginTop: "41.2%",
    },
    "& .sary-tash-bt-ct": {
      width: "17%",
      left: "42.7%",
      marginTop: "41.1%",
    },
    "& .sary-tash-tp-ct": {
      width: "17%",
      left: "42.9%",
      marginTop: "19.5%",
    },
    "& .side-el-tp-1": {
      width: "3.6%",
      left: "12.9%",
      marginTop: "29.2%",
    },
    "& .side-el-tp-2": {
      width: "3.3%",
      left: "13.2%",
      marginTop: "32.4%",
    },
    "& .side-el-tp-3": {
      width: "3.6%",
      left: "13.1%",
      marginTop: "34.7%",
    },
    "& .side-el-tp-4": {
      width: "3.1%",
      left: "13.3%",
      marginTop: "36.5%",
    },
    "& .side-el-bt-1": {
      width: "4.7%",
      left: "11.7%",
      marginTop: "43.5%",
    },
    "& .side-el-bt-2": {
      width: "4.7%",
      left: "11.7%",
      marginTop: "46.3%",
    },
    "& .side-el-bt-3": {
      width: "4.7%",
      left: "11.7%",
      marginTop: "49.1%",
    },
    "& .side-el-bt-4": {
      width: "4.7%",
      left: "11.7%",
      marginTop: "52.1%",
    },
    "& .side-el-bt-5": {
      width: "4.7%",
      left: "11.7%",
      marginTop: "54.5%",
    },
  },
}));
