'use client';

import { useState } from 'react';
import { Mnemonic, UserSecretKey } from '@multiversx/sdk-core';

export default function Home() {
  const [wallet, setWallet] = useState<{
    mnemonic: string;
    secretKey: string;
    publicKey: string;
    address: string;
  } | null>(null);

  const generateWallet = () => {
    const mnemonic = Mnemonic.generate(); // Gera as 24 palavras
    const mnemonicString = mnemonic.toString(); // Converte pra string

    const seed = mnemonic.deriveSeed(); // Deriva a seed
    const secretKey = UserSecretKey.fromSeed(seed); // Gera chave secreta
    const publicKey = secretKey.generatePublicKey(); // Gera chave pública
    const address = publicKey.toAddress().bech32(); // Converte pra endereço bech32

    setWallet({
      mnemonic: mnemonicString,
      secretKey: secretKey.hex(),
      publicKey: publicKey.hex(),
      address,
    });
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Gerador de Carteira MultiversX</h1>
      <button
        onClick={generateWallet}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition mb-6"
      >
        Gerar Carteira
      </button>

      {wallet && (
        <div className="w-full max-w-xl bg-white p-4 rounded shadow space-y-2 text-sm">
          <p><strong>Mnemonic:</strong> {wallet.mnemonic}</p>
          <p><strong>Secret Key:</strong> {wallet.secretKey}</p>
          <p><strong>Public Key:</strong> {wallet.publicKey}</p>
          <p><strong>Endereço:</strong> {wallet.address}</p>
        </div>
      )}
    </main>
  );
}
