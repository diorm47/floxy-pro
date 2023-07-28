import { cryptoOrders, wallet, productData, cryptoOrderData, icoLandingTeam, blogs } from "./crypto";
import { invoiceList } from "./invoices";
import { projects, projectListData, OverviewTeamMember } from "./projects";
import { tasks } from "./tasks";
import {
  inboxmails,
  starredmails,
  importantmails,
  draftmails,
  sentmails,
  trashmails,
  mailDB
} from "./mails";
import {
  cartData,
  comments,
  customerData,
  discountData,
  orders,
  productsData,
  recentProducts,
  shops,
  productComments
} from "./ecommerce";
import { chats, contacts, groups, messages } from "./chat";
import { calenderDefaultCategories, events } from "./calender";
import { users, userProfile } from "./contacts";
import { yearData, monthData, weekData } from "./dashboard";

import { jobs, jobListCandidate, jobApply } from "./job";

import {
  janTopSellingData,
  decTopSellingData,
  novTopSellingData,
  octTopSellingData,
  janEarningData,
  decEarningData,
  novEarningData,
  octEarningData,
  chatData,
} from "./dashboard-saas";

import { marchWalletData, febWalletData, janWalletData, decWalletData } from "./dashboard-crypto";

import { jobVacancyData, statistic_data } from "./dashboard-job";

import visitor from "./dashboard-blog";

export {
  productsData,
  cryptoOrderData,
  discountData,
  events,
  calenderDefaultCategories,
  chats,
  groups,
  contacts,
  messages,
  orders,
  cartData,
  customerData,
  shops,
  recentProducts,
  comments,
  wallet,
  icoLandingTeam,
  inboxmails,
  importantmails,
  draftmails,
  sentmails,
  trashmails,
  starredmails,
  cryptoOrders,
  productData,
  blogs,
  invoiceList,
  projects,
  projectListData,
  OverviewTeamMember,
  tasks,
  users,
  userProfile,
  yearData,
  monthData,
  weekData,
  janTopSellingData,
  decTopSellingData,
  novTopSellingData,
  octTopSellingData,
  janEarningData,
  decEarningData,
  novEarningData,
  octEarningData,
  chatData,
  productComments,
  jobs,
  jobListCandidate,
  jobApply,
  marchWalletData, febWalletData, janWalletData, decWalletData, jobVacancyData, statistic_data, visitor, mailDB
};
