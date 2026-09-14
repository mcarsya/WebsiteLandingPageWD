import { useState } from '#app';

export const useDonationModal = () => {
  const isDonationModalOpen = useState<boolean>('donation-modal-open', () => false);

  const openDonationModal = () => {
    isDonationModalOpen.value = true;
  };

  const closeDonationModal = () => {
    isDonationModalOpen.value = false;
  };

  return {
    isDonationModalOpen,
    openDonationModal,
    closeDonationModal
  };
};

