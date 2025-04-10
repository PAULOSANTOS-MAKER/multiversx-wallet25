#![no_std]

#[allow(unused_imports)]
use multiversx_sc::imports::*;

#[multiversx_sc::contract]
pub trait Crowdfunding {
    #[storage_mapper("totalDonations")]
    fn total_donations(&self) -> SingleValueMapper<BigUint>;

    #[init]
    fn init(&self) {}

    #[payable("EGLD")]
    #[endpoint]
    fn donate(&self) {
        let payment = self.call_value().egld();
        self.total_donations().update(|v| *v += &payment);
    }

    #[view(getTotalDonations)]
    fn get_total_donations(&self) -> BigUint {
        self.total_donations().get()
    }
}
