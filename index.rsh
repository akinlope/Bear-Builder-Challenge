'reach 0.1';

// const Player = {
//   informTimeout: Fun([], Null),
// }
export const main = Reach.App(() => {
  const Alice = Participant('Alice', {
    // ...Player,
    sendToken: UInt, 
    deadline: UInt,
  });
  const Bob = Participant('Bob', {
    // ...Player,
    receiveToken: Fun([UInt], Null)
  });
  init();
  // The first one to publish deploys the contract
  Alice.only(()=> {
    const sendToken = declassify(interact.sendToken);
  })
  Alice.publish(sendToken)
    .pay(sendToken)
  commit();
  // The second one to publish always attaches
  Bob.only(()=> {
    interact.receiveToken(sendToken)
  });
  Bob.publish();
  transfer(sendToken).to(Bob)
  commit();
  // write your program here
  exit();
});
