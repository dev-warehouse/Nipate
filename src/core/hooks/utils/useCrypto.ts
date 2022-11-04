import { AES, enc, MD5 } from 'crypto-js'

/**
 * Hook for encrypting and decrypting
 */
export default function useCrypto(key: string) {
  const encrypt = (message: string): string =>
    AES.encrypt(message, key).toString()
  const decrypt = (cipherText: string): string =>
    AES.decrypt(cipherText, key).toString(enc.Utf8)

  const hash = (text: string) => MD5(text).toString(enc.Utf8)
  return { encrypt, decrypt, hash }
}
