import { Mnemonic, UserSecretKey } from '@multiversx/sdk-core';

export function generateWallet() {
  const mnemonic = Mnemonic.generate(); // Gera objeto Mnemonic
  const mnemonicString = mnemonic.toString(); // Converte pra string

  const secretKey = UserSecretKey.fromSeed(mnemonic.deriveSeed()); // Usa seed correta
  const publicKey = secretKey.generatePublicKey();
  const address = publicKey.toAddress().bech32();

  return {
    mnemonic: mnemonicString,
    secretKey: secretKey.hex(),
    publicKey: publicKey.hex(),
    address,
  };
}
