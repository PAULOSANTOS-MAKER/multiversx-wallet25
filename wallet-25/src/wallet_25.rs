#![no_std]

use multiversx_sc::imports::*;

#[multiversx_sc::contract]
pub trait Wallet25 {
    #[init]
    fn init(&self) {
        // inicialização básica
    }

    #[upgrade]
    fn upgrade(&self) {}

    #[view]
    #[storage_mapper("owner")]
    fn owner(&self) -> SingleValueMapper<ManagedAddress>;
}
