// Encargado de orquestar todas las funciones de los demás archivos
import { addEventListeners } from './operations';
import { listeners } from './operations';

export function initializeApp() {
    addEventListener();
    listeners();
}