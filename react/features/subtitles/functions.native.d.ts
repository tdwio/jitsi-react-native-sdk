/**
 * Logs when about the received transcription chunk.
 *
 * @param {string} transcriptMessageID - Transcription message id.
 * @param {string} language - The language of the transcribed message.
 * @param {Object} participant - The participant who send the message.
 * @param {any} text - The message text.
 * @param {any} _store - The store.
 * @returns {Event}
 */
export declare const notifyTranscriptionChunkReceived: (transcriptMessageID: string, language: string, participant: Object, text: any, _store?: any) => void;
