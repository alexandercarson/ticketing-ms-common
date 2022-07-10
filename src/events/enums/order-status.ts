export enum OrderStatus {
  // The Order was created, but, the ticket has not been yet been reserved.
  Created = "created",

  /*
    Anytime the Ticket attached to The Order reservation has already been reserved, 
    or, when the user has cancelled The Order
    or, The Order expires before payment has been made.
  */
  Cancelled = "cancelled",

  // The order sucesfully reserved a Ticket
  AwaitingPayment = "awaiting:payment",

  /*
    The Order has reserved a Ticket 
    AND the user has provided a successfull payment info 
    AND payment has been captured 
    AND a succesfull refund request has been sent
  */
  Awaitingrefund = "awaiting:refund",

  // The Order has reserved a Ticket AND the user has provided a successfull payment info AND payment has been captured
  PaymentComplete = "complete",
}
