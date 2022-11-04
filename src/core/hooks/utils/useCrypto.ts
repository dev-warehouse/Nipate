import { AES, MD5 } from 'crypto-js'

/**
 * Hook for encrypting and decrypting
 */
export default function useCrypto(key: string) {
  const encrypt = (message: string): string =>
    AES.encrypt(message, key).toString()
  const decrypt = (cipherText: string): string =>
    AES.decrypt(cipherText, key).toString()

  const hash = (text: string): string => MD5(text).toString()
  return { encrypt, decrypt, hash }
}
