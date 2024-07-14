import { useState } from "react";
import {
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
  Icon,
  IconButton,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import MenuItems from "../components/MenuItems";
import TopNavigation from "../components/TopNavigation";
import "./Root.css";

const Root = () => {
  const [rightDateTimePickerValue, setRightDateTimePickerValue] =
    useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="root">
        <div className="sidebar">
          <div className="side-bar-content-parent">
            <div className="side-bar-content">
              <img
                className="logo-icon"
                loading="lazy"
                alt=""
                src="/logo.svg"
              />
            </div>
            <MenuItems />
          </div>
          <div className="user-panel">
            <div className="user">
              <div className="logout">
                <div className="headphone-icon">
                  <img
                    className="fiheadphones-icon"
                    loading="lazy"
                    alt=""
                    src="/fiheadphones.svg"
                  />
                </div>
              </div>
              <div className="banner">
                <div className="container">
                  <div className="gift-icon">
                    <img
                      className="figift-icon"
                      loading="lazy"
                      alt=""
                      src="/figift.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-bar">
              <div className="bottom">
                <div className="logout1">
                  <div className="logout-icon">
                    <img
                      className="iconlybulklogout"
                      loading="lazy"
                      alt=""
                      src="/iconlybulklogout.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <main className="content">
          <section className="top-nav-parent">
            <TopNavigation />
            <div className="main-content">
              <div className="header-parent">
                <div className="header">
                  <div className="orders-summary">Orders Summary</div>
                  <Button
                    className="right"
                    startIcon={
                      <img width="24px" height="24px" src="/fiplus.svg" />
                    }
                    disableElevation
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "14",
                      background: "#5570f1",
                      borderRadius: "0px 0px 0px 0px",
                      "&:hover": { background: "#5570f1" },
                      width: 200,
                      height: 36,
                    }}
                  >
                    Create a New Order
                  </Button>
                </div>
                <div className="summaryrow">
                  <div className="dashboard-summary-card">
                    <div className="summarycontainer">
                      <div className="summaryheading">
                        <img
                          className="icon"
                          loading="lazy"
                          alt=""
                          src="/icon.svg"
                        />
                        <FormControl
                          className="filter"
                          variant="standard"
                          sx={{
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderRadius: "0px 0px 0px 0px",
                            width: "82px",
                            height: "16px",
                            m: 0,
                            p: 0,
                            "& .MuiInputBase-root": {
                              m: 0,
                              p: 0,
                              minHeight: "16px",
                              justifyContent: "center",
                              display: "inline-flex",
                            },
                            "& .MuiInputLabel-root": {
                              m: 0,
                              p: 0,
                              minHeight: "16px",
                              display: "inline-flex",
                            },
                            "& .MuiMenuItem-root": {
                              m: 0,
                              p: 0,
                              height: "16px",
                              display: "inline-flex",
                            },
                            "& .MuiSelect-select": {
                              m: 0,
                              p: 0,
                              height: "16px",
                              alignItems: "center",
                              display: "inline-flex",
                            },
                            "& .MuiInput-input": { m: 0, p: 0 },
                            "& .MuiInputBase-input": {
                              color: "#bec0ca",
                              fontSize: 12,
                              fontWeight: "Regular",
                              fontFamily: "Inter",
                              textAlign: "left",
                              p: "0 !important",
                            },
                          }}
                        >
                          <InputLabel color="primary" />
                          <Select
                            color="primary"
                            disableUnderline
                            displayEmpty
                            IconComponent={() => (
                              <img
                                width="16px"
                                height="16px"
                                src="/fichevrondown-1.svg"
                                style={{}}
                              />
                            )}
                          >
                            <MenuItem>This Week</MenuItem>
                          </Select>
                          <FormHelperText />
                        </FormControl>
                      </div>
                      <div className="summary-values">
                        <div className="order-types">
                          <div className="all-orders">All Orders</div>
                          <div className="all-count">
                            <div className="empty-count">450</div>
                            <div className="empty-count1">+0.00%</div>
                          </div>
                        </div>
                        <div className="pending-orders">
                          <a className="pending">Pending</a>
                          <div className="pending-count">
                            <div className="empty-count2">5</div>
                            <div className="empty-count3">+0.00%</div>
                          </div>
                        </div>
                        <div className="completed-orders">
                          <div className="completed">Completed</div>
                          <div className="completed-count">
                            <div className="empty-count4">320</div>
                            <div className="empty-count5">+0.00%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dashboard-summary-card1">
                    <div className="summarycontainer1">
                      <div className="summaryheading1">
                        <img
                          className="icon1"
                          loading="lazy"
                          alt=""
                          src="/icon.svg"
                        />
                        <FormControl
                          className="filter1"
                          variant="standard"
                          sx={{
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderRadius: "0px 0px 0px 0px",
                            width: "82px",
                            height: "16px",
                            m: 0,
                            p: 0,
                            "& .MuiInputBase-root": {
                              m: 0,
                              p: 0,
                              minHeight: "16px",
                              justifyContent: "center",
                              display: "inline-flex",
                            },
                            "& .MuiInputLabel-root": {
                              m: 0,
                              p: 0,
                              minHeight: "16px",
                              display: "inline-flex",
                            },
                            "& .MuiMenuItem-root": {
                              m: 0,
                              p: 0,
                              height: "16px",
                              display: "inline-flex",
                            },
                            "& .MuiSelect-select": {
                              m: 0,
                              p: 0,
                              height: "16px",
                              alignItems: "center",
                              display: "inline-flex",
                            },
                            "& .MuiInput-input": { m: 0, p: 0 },
                            "& .MuiInputBase-input": {
                              color: "#bec0ca",
                              fontSize: 12,
                              fontWeight: "Regular",
                              fontFamily: "Inter",
                              textAlign: "left",
                              p: "0 !important",
                            },
                          }}
                        >
                          <InputLabel color="primary" />
                          <Select
                            color="primary"
                            disableUnderline
                            displayEmpty
                            IconComponent={() => (
                              <img
                                width="16px"
                                height="16px"
                                src="/fichevrondown-2.svg"
                                style={{}}
                              />
                            )}
                          >
                            <MenuItem>This Week</MenuItem>
                          </Select>
                          <FormHelperText />
                        </FormControl>
                      </div>
                      <div className="frame-parent">
                        <div className="all-orders-parent">
                          <div className="all-orders1">Canceled</div>
                          <div className="parent">
                            <div className="div">30</div>
                            <div className="div1">-20%</div>
                          </div>
                        </div>
                        <div className="pending-parent">
                          <a className="pending1">Returned</a>
                          <div className="group">
                            <div className="div2">20</div>
                            <div className="div3">+0.00%</div>
                          </div>
                        </div>
                        <div className="completed-parent">
                          <div className="completed1">Damaged</div>
                          <div className="frame-div">
                            <div className="div4">5</div>
                            <div className="div5">+0.00%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dashboard-summary-card2">
                    <div className="summarycontainer2">
                      <div className="summaryheading2">
                        <img
                          className="icon2"
                          loading="lazy"
                          alt=""
                          src="/icon-2.svg"
                        />
                        <FormControl
                          className="filter2"
                          variant="standard"
                          sx={{
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderRadius: "0px 0px 0px 0px",
                            width: "82px",
                            height: "16px",
                            m: 0,
                            p: 0,
                            "& .MuiInputBase-root": {
                              m: 0,
                              p: 0,
                              minHeight: "16px",
                              justifyContent: "center",
                              display: "inline-flex",
                            },
                            "& .MuiInputLabel-root": {
                              m: 0,
                              p: 0,
                              minHeight: "16px",
                              display: "inline-flex",
                            },
                            "& .MuiMenuItem-root": {
                              m: 0,
                              p: 0,
                              height: "16px",
                              display: "inline-flex",
                            },
                            "& .MuiSelect-select": {
                              m: 0,
                              p: 0,
                              height: "16px",
                              alignItems: "center",
                              display: "inline-flex",
                            },
                            "& .MuiInput-input": { m: 0, p: 0 },
                            "& .MuiInputBase-input": {
                              color: "#bec0ca",
                              fontSize: 12,
                              fontWeight: "Regular",
                              fontFamily: "Inter",
                              textAlign: "left",
                              p: "0 !important",
                            },
                          }}
                        >
                          <InputLabel color="primary" />
                          <Select
                            color="primary"
                            disableUnderline
                            displayEmpty
                            IconComponent={() => (
                              <img
                                width="16px"
                                height="16px"
                                src="/fichevrondown-3.svg"
                                style={{}}
                              />
                            )}
                          >
                            <MenuItem>This Week</MenuItem>
                          </Select>
                          <FormHelperText />
                        </FormControl>
                      </div>
                      <div className="customer-data">
                        <div className="customer-types">
                          <div className="customers">Abandoned Cart</div>
                          <div className="customer-count">
                            <div className="empty-count6">20%</div>
                            <div className="empty-count7">+0.00%</div>
                          </div>
                        </div>
                        <div className="customer-types1">
                          <div className="active">Customers</div>
                          <div className="parent1">
                            <div className="div6">30</div>
                            <div className="div7">+0.00%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <footer className="table">
                  <div className="table-container">
                    <div className="table-header">
                      <div className="customer-orders">Customer Orders</div>
                      <div className="table-controls">
                        <TextField
                          className="left"
                          placeholder="Search"
                          variant="outlined"
                          InputProps={{
                            startAdornment: (
                              <img
                                width="20px"
                                height="20px"
                                src="/iconlylightsearch.svg"
                              />
                            ),
                          }}
                          sx={{
                            "& fieldset": { borderColor: "#cfd3d4" },
                            "& .MuiInputBase-root": {
                              height: "29px",
                              paddingLeft: "8px",
                              fontSize: "12px",
                            },
                            "& .MuiInputBase-input": {
                              paddingLeft: "16px",
                              color: "#abafb1",
                            },
                            width: "176px",
                          }}
                        />
                        <div className="right1">
                          <DatePicker
                            value={rightDateTimePickerValue}
                            onChange={(newValue) => {
                              setRightDateTimePickerValue(newValue);
                            }}
                            sx={{
                              fieldset: {
                                borderColor: "transparent",
                                borderTopWidth: 1,
                                borderRightWidth: 1,
                                borderBottomWidth: 1,
                                borderLeftWidth: 1,
                              },
                              "&:hover": {
                                fieldset: { borderColor: "transparent" },
                                ".MuiOutlinedInput-notchedOutline": {
                                  borderColor: "transparent",
                                },
                              },
                              "& input::placeholder": {
                                textColor: "#53545d",
                                fontSize: 11,
                              },
                              input: {
                                color: "#53545d",
                                fontSize: 11,
                                textAlign: "center",
                                fontWeight: "400",
                              },
                              "& .MuiInputBase-root": {
                                height: 29,
                                gap: "8px",
                                flexDirection: { flexDirection: "row" },
                              },
                            }}
                            slotProps={{
                              textField: {
                                size: "medium",
                                fullWidth: true,
                                required: false,
                                autoFocus: false,
                                error: false,
                                helperText: "Share",
                                placeholder: "Filter",
                              },
                              openPickerIcon: {
                                component: () => (
                                  <img
                                    width="16px"
                                    height="16px"
                                    src="/iconlylightcalendar.svg"
                                  />
                                ),
                              },
                            }}
                            label="Filter"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="table-content">
                    <div className="tableheader">
                      <div className="customer-column">
                        <input className="controls" type="checkbox" />
                        <div className="customer-name-head">
                          <div className="name-sort">
                            <div className="customer-name">Customer Name</div>
                            <div className="name-sort-icon">
                              <img
                                className="vuesaxoutlinesort-icon"
                                loading="lazy"
                                alt=""
                                src="/vuesaxoutlinesort.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="column-head">
                        <div className="sort-head">
                          <div className="order-date">Order Date</div>
                          <div className="sort-icon">
                            <img
                              className="vuesaxoutlinesort-icon1"
                              loading="lazy"
                              alt=""
                              src="/vuesaxoutlinesort.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="column-head1">
                        <div className="order-type-parent">
                          <div className="order-type">Order Type</div>
                          <div className="vuesaxoutlinesort-wrapper">
                            <img
                              className="vuesaxoutlinesort-icon2"
                              loading="lazy"
                              alt=""
                              src="/vuesaxoutlinesort.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="column-head2">
                        <div className="tracking-id-parent">
                          <div className="tracking-id">Tracking ID</div>
                          <div className="vuesaxoutlinesort-container">
                            <img
                              className="vuesaxoutlinesort-icon3"
                              loading="lazy"
                              alt=""
                              src="/vuesaxoutlinesort.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="column-head3">
                        <div className="order-total-parent">
                          <div className="order-total">Order Total</div>
                          <div className="vuesaxoutlinesort-frame">
                            <img
                              className="vuesaxoutlinesort-icon4"
                              alt=""
                              src="/vuesaxoutlinesort.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="column-head4">
                        <div className="action-parent">
                          <div className="action">Action</div>
                          <div className="vuesaxoutlinesort-wrapper1">
                            <img
                              className="vuesaxoutlinesort-icon5"
                              alt=""
                              src="/vuesaxoutlinesort.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="column-head5">
                        <div className="status-parent">
                          <div className="status">Status</div>
                          <div className="vuesaxoutlinesort-wrapper2">
                            <img
                              className="vuesaxoutlinesort-icon6"
                              alt=""
                              src="/vuesaxoutlinesort.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tablerowcontainer">
                      <div className="colcontents">
                        <div className="row-content">
                          <div className="janet-adebayo">Janet Adebayo</div>
                          <div className="aug-2022-">
                            12 Aug 2022 - 12:25 am
                          </div>
                        </div>
                        <div className="tracking">
                          <div className="fjr73">9348fjr73</div>
                          <div className="div8">₦25,000.00</div>
                        </div>
                        <div className="action1">
                          <input className="status-column" type="checkbox" />
                          <div className="delivery">
                            <div className="home-delivery">Home Delivery</div>
                          </div>
                          <div className="status-icon-column">
                            <div>
                              <div className="completed2">Completed</div>
                              <img
                                className="fichevron-down-icon"
                                alt=""
                                src="/fichevrondown-5.svg"
                              />
                              <div className="status-action">
                                <div className="copy-container">
                                  <img
                                    className="ucopy-alt-icon"
                                    alt=""
                                    src="/ucopyalt.svg"
                                  />
                                </div>
                                <div className="status1">
                                  <div className="completed3">Completed</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="colcontents1">
                        <div className="samuel-johnson-parent">
                          <div className="samuel-johnson">Samuel Johnson</div>
                          <div className="aug-2022-1">
                            12 Aug 2022 - 12:25 am
                          </div>
                        </div>
                        <div className="fjr73-parent">
                          <div className="fjr731">9348fjr73</div>
                          <div className="div9">₦25,000.00</div>
                        </div>
                        <div className="frame-group">
                          <input className="frame-input" type="checkbox" />
                          <div className="home-delivery-wrapper">
                            <div className="home-delivery1">Home Delivery</div>
                          </div>
                          <div className="icon-wrapper">
                            <div>
                              <div className="in-progress">In-Progress</div>
                              <img
                                className="fichevron-down-icon1"
                                alt=""
                                src="/fichevrondown-5.svg"
                              />
                              <div className="frame-container">
                                <div className="ucopy-alt-wrapper">
                                  <img
                                    className="ucopy-alt-icon1"
                                    alt=""
                                    src="/ucopyalt.svg"
                                  />
                                </div>
                                <div className="status2">
                                  <div className="in-progress1">
                                    In-Progress
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="colcontents2">
                        <div className="francis-doe-parent">
                          <div className="francis-doe">Francis Doe</div>
                          <div className="aug-2022-2">
                            12 Aug 2022 - 12:25 am
                          </div>
                        </div>
                        <div className="fjr73-group">
                          <div className="fjr732">9348fjr73</div>
                          <div className="div10">₦25,000.00</div>
                        </div>
                        <div className="controls-parent">
                          <input className="controls1" type="checkbox" />
                          <div className="pick-up-wrapper">
                            <div className="pick-up">Pick Up</div>
                          </div>
                          <div className="icon-container">
                            <div>
                              <div className="pending2">Pending</div>
                              <img
                                className="fichevron-down-icon2"
                                alt=""
                                src="/fichevrondown-5.svg"
                              />
                              <div className="frame-parent1">
                                <div className="ucopy-alt-container">
                                  <img
                                    className="ucopy-alt-icon2"
                                    alt=""
                                    src="/ucopyalt.svg"
                                  />
                                </div>
                                <div className="status3">
                                  <div className="pending3">Pending</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="colcontents3">
                        <div className="christian-dior-parent">
                          <div className="christian-dior">Christian Dior</div>
                          <div className="aug-2022-3">
                            12 Aug 2022 - 12:25 am
                          </div>
                        </div>
                        <div className="fjr73-container">
                          <div className="fjr733">9348fjr73</div>
                          <div className="div11">₦25,000.00</div>
                        </div>
                        <div className="controls-group">
                          <input className="controls2" type="checkbox" />
                          <div className="pick-up-container">
                            <div className="pick-up1">Pick Up</div>
                          </div>
                          <div className="icon-frame">
                            <div>
                              <div className="completed4">Completed</div>
                              <img
                                className="fichevron-down-icon3"
                                alt=""
                                src="/fichevrondown-5.svg"
                              />
                              <div className="frame-parent2">
                                <div className="ucopy-alt-frame">
                                  <img
                                    className="ucopy-alt-icon3"
                                    alt=""
                                    src="/ucopyalt.svg"
                                  />
                                </div>
                                <div className="status4">
                                  <div className="completed5">Completed</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="colcontents4">
                        <div className="christian-dior-group">
                          <div className="christian-dior1">Christian Dior</div>
                          <div className="aug-2022-4">
                            12 Aug 2022 - 12:25 am
                          </div>
                        </div>
                        <div className="fjr73-parent1">
                          <div className="fjr734">9348fjr73</div>
                          <div className="div12">₦25,000.00</div>
                        </div>
                        <div className="controls-container">
                          <input className="controls3" type="checkbox" />
                          <div className="pick-up-frame">
                            <div className="pick-up2">Pick Up</div>
                          </div>
                          <div className="icon-wrapper1">
                            <div>
                              <div className="completed6">Completed</div>
                              <img
                                className="fichevron-down-icon4"
                                alt=""
                                src="/fichevrondown-5.svg"
                              />
                              <div className="frame-parent3">
                                <div className="ucopy-alt-wrapper1">
                                  <img
                                    className="ucopy-alt-icon4"
                                    alt=""
                                    src="/ucopyalt.svg"
                                  />
                                </div>
                                <div className="status5">
                                  <div className="completed7">Completed</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="colcontents5">
                        <div className="janet-adebayo-parent">
                          <div className="janet-adebayo1">Janet Adebayo</div>
                          <div className="aug-2022-5">
                            12 Aug 2022 - 12:25 am
                          </div>
                        </div>
                        <div className="fjr73-parent2">
                          <div className="fjr735">9348fjr73</div>
                          <div className="div13">₦25,000.00</div>
                        </div>
                        <div className="frame-parent4">
                          <input className="frame-input1" type="checkbox" />
                          <div className="home-delivery-container">
                            <div className="home-delivery2">Home Delivery</div>
                          </div>
                          <div className="icon-wrapper2">
                            <div>
                              <div className="completed8">Completed</div>
                              <img
                                className="fichevron-down-icon5"
                                alt=""
                                src="/fichevrondown-5.svg"
                              />
                              <div className="frame-parent5">
                                <div className="ucopy-alt-wrapper2">
                                  <img
                                    className="ucopy-alt-icon5"
                                    alt=""
                                    src="/ucopyalt.svg"
                                  />
                                </div>
                                <div className="status6">
                                  <div className="completed9">Completed</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="colcontents6">
                        <div className="samuel-johnson-group">
                          <div className="samuel-johnson1">Samuel Johnson</div>
                          <div className="aug-2022-6">
                            12 Aug 2022 - 12:25 am
                          </div>
                        </div>
                        <div className="fjr73-parent3">
                          <div className="fjr736">9348fjr73</div>
                          <div className="div14">₦25,000.00</div>
                        </div>
                        <div className="frame-parent6">
                          <input className="frame-input2" type="checkbox" />
                          <div className="home-delivery-frame">
                            <div className="home-delivery3">Home Delivery</div>
                          </div>
                          <div className="icon-wrapper3">
                            <div>
                              <div className="in-progress2">In-Progress</div>
                              <img
                                className="fichevron-down-icon6"
                                alt=""
                                src="/fichevrondown-5.svg"
                              />
                              <div className="frame-parent7">
                                <div className="ucopy-alt-wrapper3">
                                  <img
                                    className="ucopy-alt-icon6"
                                    alt=""
                                    src="/ucopyalt.svg"
                                  />
                                </div>
                                <div className="status7">
                                  <div className="in-progress3">
                                    In-Progress
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="colcontents7">
                        <div className="francis-doe-group">
                          <div className="francis-doe1">Francis Doe</div>
                          <div className="aug-2022-7">
                            12 Aug 2022 - 12:25 am
                          </div>
                        </div>
                        <div className="fjr73-parent4">
                          <div className="fjr737">9348fjr73</div>
                          <div className="div15">₦25,000.00</div>
                        </div>
                        <div className="controls-parent1">
                          <input className="controls4" type="checkbox" />
                          <div className="pick-up-wrapper1">
                            <div className="pick-up3">Pick Up</div>
                          </div>
                          <div className="icon-wrapper4">
                            <div>
                              <div className="pending4">Pending</div>
                              <img
                                className="fichevron-down-icon7"
                                alt=""
                                src="/fichevrondown-5.svg"
                              />
                              <div className="frame-parent8">
                                <div className="ucopy-alt-wrapper4">
                                  <img
                                    className="ucopy-alt-icon7"
                                    alt=""
                                    src="/ucopyalt.svg"
                                  />
                                </div>
                                <div className="status8">
                                  <div className="pending5">Pending</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="colcontents8">
                        <div className="christian-dior-container">
                          <div className="christian-dior2">Christian Dior</div>
                          <div className="aug-2022-8">
                            12 Aug 2022 - 12:25 am
                          </div>
                        </div>
                        <div className="fjr73-parent5">
                          <div className="fjr738">9348fjr73</div>
                          <div className="div16">₦25,000.00</div>
                        </div>
                        <div className="controls-parent2">
                          <input className="controls5" type="checkbox" />
                          <div className="pick-up-wrapper2">
                            <div className="pick-up4">Pick Up</div>
                          </div>
                          <div className="icon-wrapper5">
                            <div>
                              <div className="completed10">Completed</div>
                              <img
                                className="fichevron-down-icon8"
                                alt=""
                                src="/fichevrondown-5.svg"
                              />
                              <div className="frame-parent9">
                                <div className="ucopy-alt-wrapper5">
                                  <img
                                    className="ucopy-alt-icon8"
                                    alt=""
                                    src="/ucopyalt.svg"
                                  />
                                </div>
                                <div className="status9">
                                  <div className="completed11">Completed</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="colcontents9">
                        <div className="controls-parent3">
                          <input className="controls6" type="checkbox" />
                          <div className="christian-dior-wrapper">
                            <div className="christian-dior3">
                              Christian Dior
                            </div>
                          </div>
                        </div>
                        <div className="colcontents-inner">
                          <div className="aug-2022-1225-am-parent">
                            <div className="aug-2022-9">
                              12 Aug 2022 - 12:25 am
                            </div>
                            <div className="pick-up5">Pick Up</div>
                          </div>
                        </div>
                        <div className="colcontents-child">
                          <div className="frame-parent10">
                            <div className="fjr73-parent6">
                              <div className="fjr739">9348fjr73</div>
                              <div className="copy-icon">
                                <img
                                  className="ucopy-alt-icon9"
                                  loading="lazy"
                                  alt=""
                                  src="/ucopyalt.svg"
                                />
                              </div>
                            </div>
                            <div className="div17">₦25,000.00</div>
                          </div>
                        </div>
                        <div className="order-status">
                          <div className="order-status-content">
                            <div className="icon3">
                              <div className="completed12">Completed</div>
                              <img
                                className="fichevron-down-icon9"
                                alt=""
                                src="/fichevrondown-5.svg"
                              />
                            </div>
                            <div className="status10">
                              <div className="completed13">Completed</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tableheader1">
                    <FormControl
                      className="icon4"
                      variant="standard"
                      sx={{
                        borderTopWidth: "1px",
                        borderRightWidth: "1px",
                        borderBottomWidth: "1px",
                        borderLeftWidth: "1px",
                        backgroundColor: "rgba(94, 99, 102, 0.08)",
                        borderRadius: "8px",
                        width: "60px",
                        height: "23px",
                        m: 0,
                        p: 0,
                        "& .MuiInputBase-root": {
                          m: 0,
                          p: 0,
                          minHeight: "23px",
                          justifyContent: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInputLabel-root": {
                          m: 0,
                          p: 0,
                          minHeight: "23px",
                          display: "inline-flex",
                        },
                        "& .MuiMenuItem-root": {
                          m: 0,
                          p: 0,
                          height: "23px",
                          display: "inline-flex",
                        },
                        "& .MuiSelect-select": {
                          m: 0,
                          p: 0,
                          height: "23px",
                          alignItems: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInput-input": { m: 0, p: 0 },
                        "& .MuiInputBase-input": {
                          color: "#8b8d97",
                          fontSize: 12,
                          fontWeight: "Regular",
                          fontFamily: "Inter",
                          textAlign: "left",
                          p: "0 !important",
                          marginLeft: "11px",
                        },
                      }}
                    >
                      <InputLabel color="success" />
                      <Select
                        color="success"
                        disableUnderline
                        displayEmpty
                        IconComponent={() => (
                          <img
                            width="16px"
                            height="16px"
                            src="/fichevrondown-15.svg"
                            style={{ marginRight: "11px" }}
                          />
                        )}
                      >
                        <MenuItem>10</MenuItem>
                      </Select>
                      <FormHelperText />
                    </FormControl>
                    <div className="page-item">
                      <div className="item-select">
                        <div className="items-per-page">Items per page</div>
                        <div className="total-item">
                          <div className="of-200-items">1-10 of 200 items</div>
                        </div>
                      </div>
                    </div>
                    <div className="page-number">
                      <div className="page-select">
                        <div className="icon5">
                          <FormControl
                            className="page-dropdown"
                            variant="standard"
                            sx={{
                              borderTopWidth: "1px",
                              borderRightWidth: "1px",
                              borderBottomWidth: "1px",
                              borderLeftWidth: "1px",
                              borderRadius: "0px 0px 0px 0px",
                              width: "30px",
                              height: "16px",
                              m: 0,
                              p: 0,
                              "& .MuiInputBase-root": {
                                m: 0,
                                p: 0,
                                minHeight: "16px",
                                justifyContent: "center",
                                display: "inline-flex",
                              },
                              "& .MuiInputLabel-root": {
                                m: 0,
                                p: 0,
                                minHeight: "16px",
                                display: "inline-flex",
                              },
                              "& .MuiMenuItem-root": {
                                m: 0,
                                p: 0,
                                height: "16px",
                                display: "inline-flex",
                              },
                              "& .MuiSelect-select": {
                                m: 0,
                                p: 0,
                                height: "16px",
                                alignItems: "center",
                                display: "inline-flex",
                              },
                              "& .MuiInput-input": { m: 0, p: 0 },
                              "& .MuiInputBase-input": {
                                fontFamily: "Inter",
                                textAlign: "left",
                                p: "0 !important",
                              },
                            }}
                          >
                            <InputLabel color="primary" />
                            <Select
                              color="primary"
                              disableUnderline
                              displayEmpty
                              IconComponent={() => (
                                <img
                                  width="16px"
                                  height="16px"
                                  src="/fichevrondown-16.svg"
                                  style={{}}
                                />
                              )}
                            >
                              <MenuItem>1</MenuItem>
                            </Select>
                            <FormHelperText />
                          </FormControl>
                        </div>
                        <div className="of-44-pages">of 44 pages</div>
                      </div>
                    </div>
                    <div className="page-action">
                      <img
                        className="actions-arrow-down"
                        alt=""
                        src="/actions--arrowdown@2x.png"
                      />
                    </div>
                    <div className="page-action1">
                      <img
                        className="actions-arrow-down1"
                        alt=""
                        src="/actions--arrowdown-1@2x.png"
                      />
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          </section>
        </main>
      </div>
    </LocalizationProvider>
  );
};

export default Root;
