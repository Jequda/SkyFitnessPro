export default function initializeRedBorder(
    selector: string,
    removeClassAction: (element: HTMLElement) => void
  ): void {
    const elements = document.querySelectorAll(selector);
  
    elements.forEach((element) => {
      element.addEventListener("click", () =>
        removeClassAction(element as HTMLElement)
      );
    });
  }
  
  export function addRedBorder(element: HTMLElement): void {
    element.classList.add("error-form");
  }
  
  export function removeRedBorder(element: HTMLElement): void {
    element.classList.remove("error-form");
  }