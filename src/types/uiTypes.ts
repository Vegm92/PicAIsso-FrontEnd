export interface UiState {
  isLoading: boolean;
  feedback: ModalPayload;
}

export interface ModalPayload {
  message: string;
  isError: boolean;
  isSuccess: boolean;
}
