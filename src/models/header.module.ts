export interface funcion {
  (e: React.MouseEvent<HTMLImageElement, MouseEvent>): void;
}

export interface componentProps {
  handleClick: funcion;
  isOpen: boolean;
}
