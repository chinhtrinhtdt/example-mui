import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";

function ReviewOrder() {
  const listItem = [
    {
      id: 1,
      name: "Product 1",
      desciption: "A nice thing",
      price: 9.99,
    },
    {
      id: 2,
      name: "Product 2",
      desciption: "Another thing",
      price: 3.45,
    },
    {
      id: 3,
      name: "Product 3",
      desciption: "Something else",
      price: 7.97,
    },
    {
      id: 4,
      name: "Product 4",
      desciption: "Best thing of all",
      price: 6.99,
    },
  ];

  const renderListItem = listItem.map((item) => (
    <List key={item.id}>
      <ListItem>
        <ListItemText primary={item.name} secondary={item.desciption} />
        <Typography>${item.price}</Typography>
      </ListItem>
    </List>
  ));

  const renderItem = (desciption) => (
    <Grid item xs={6} sx={{ p: 0 }}>
      <Typography component="span">{desciption}</Typography>
    </Grid>
  );

  const handleTotalMoney = () =>
    listItem.reduce((totalPrice, currentPrice) => {
      return (totalPrice += currentPrice.price);
    }, 0);

  return (
    <>
      {renderListItem}
      <List>
        <ListItem>
          <ListItemText primary="Total" />
          <Typography>
            <strong>${handleTotalMoney()}</strong>
          </Typography>
        </ListItem>
      </List>

      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <Typography component="h6" variant="h6" sx={{ mb: "16px" }}>
            <strong>Shipping</strong>
          </Typography>
          <Typography component="span" variant="body1">
            John Smith
          </Typography>
          <Typography component="span" variant="body1">
            1 MUI Drive, Reactville, Anytown, 99999, USA
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography component="div" variant="h6" sx={{ mb: "16px" }}>
            <strong>Payment Detail</strong>
          </Typography>

          <Grid container spacing={2}>
            {renderItem("Card type")}
            {renderItem("Visa")}
            {renderItem("Card holder")}
            {renderItem("Mr John Smith")}
            {renderItem("Card number")}
            {renderItem("xxxx-xxxx-xxxx-1234")}
            {renderItem("Expiry date")}
            {renderItem("04/2024")}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default ReviewOrder;
