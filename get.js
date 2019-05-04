gapi.client.sheets.spreadsheets.values.get({
  spreadsheetId: 1f-CbzC2piqPiWqm_I_uugRF80UTJA0beHhU9smDCUC8,
  range: Sheet1!A:A
}).then((response) => {
  var result = response.result;
  var numRows = result.values ? result.values.length : 0;
  console.log(`${numRows} rows retrieved.`);
});