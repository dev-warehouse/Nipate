import { enc } from 'crypto-js'
import AES from 'crypto-js/aes'

/**
 * Hook for encrypting and decrypting
 */
export default function useCrypto(hash: string) {
  const encrypt = (message: string): string =>
    AES.encrypt(message, hash).toString()
  const decrypt = (cipherText: string): string =>
    AES.decrypt(cipherText, hash).toString(enc.Utf8)
  return { encrypt, decrypt }
}
