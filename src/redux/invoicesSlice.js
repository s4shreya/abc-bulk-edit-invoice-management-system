import { createSlice } from "@reduxjs/toolkit";

const invoicesSlice = createSlice({
  name: "invoices",
  initialState: [],
  reducers: {
    addInvoice: (state, action) => {
      console.log(`add ${action.payload.id}`);
      state.push(action.payload);
    },
    deleteInvoice: (state, action) => {
      return state.filter((invoice) => invoice.id !== action.payload);
    },
    updateInvoice: (state, action) =>
      state.map((invoice) =>
        invoice.id === action.payload.id
          ? action.payload.updatedInvoice
          : invoice
      ),
  },
});

export const { addInvoice, deleteInvoice, updateInvoice } =
  invoicesSlice.actions;

export const selectInvoiceList = (state) => state.invoices;

export default invoicesSlice.reducer;
