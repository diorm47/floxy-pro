import mir from "../../assets/images/payment-systems/mir.png"
import qiwi from "../../assets/images/payment-systems/qiwi.png"
import visa from "../../assets/images/payment-systems/visa.png"
import webmoney from "../../assets/images/payment-systems/webmoney.png"
import youmoney from "../../assets/images/payment-systems/youmoney.png"
import { RatesPayload } from "./TopUpBalance.interface"

export const rates: RatesPayload[] = [
  {
    id: 1,
    title: "Тариф Trial",
    color: "#F1B44C",
    description: ["базовые возможности сервиса"],
    buttonText: "Бесплатно первые 3 дня",
    additionalText: "Далее 999₽/мес",
    price: 0,
  },
  {
    id: 2,
    title: "Тариф Base",
    color: "#6A7187",
    description: [
      "работа с чатами и группами",
      "отслеживание конверсии",
      "создание рассылок",
      "до 5 групп и чатов",
    ],
    buttonText: "Оформить за 499₽/мес",
    price: 499,
  },
  {
    id: 3,
    title: "Тариф Pro",
    color: "#34C38F",
    description: [
      "базовые возможности сервиса",
      "редиректы",
      "фильтры входящих событий",
      "ручное указание пути ID пользователей",
      "до 100 групп и чатов",
    ],
    buttonText: "Оформить за 999₽/мес",
    price: 999,
  },
  {
    id: 4,
    title: "Тариф Advanced",
    color: "#F46A6A",
    description: [
      "базовые возможности сервиса",
      "редиректы",
      "фильтры входящих событий",
      "ручное указание пути ID пользователей",
      "до 100 групп и чатов",
      "если вам нужно подключить свой сайт к уведомлениям и получить расширенный функционал, напишите нам в поддержку, расскажите о своём бизнесе и после заключения договора мы сможем вас подключить",
    ],
    buttonText: "Оформить за 4999₽/мес",
    price: 4999,
  },
]

export const paymentServices = [qiwi, webmoney, youmoney, mir, visa]
