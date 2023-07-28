<script>
    import TextField from "./TextField.svelte";
    /**
	 * @this {{ id: string; "on:click": () => void; class: string; }}
	 */
    function openModal() {
        /**
         * @type {HTMLDialogElement}
         */
        // @ts-ignore
        const dialog = document.querySelector(`#${this.id}-dialog`);
        dialog.showModal();
    }
</script>

<div class="min-h-[calc(100vh-120px)] flex flex-col justify-center">
    <h3 class="text-base tracking-wide text-center text-onBackground mb-4">
        You're not logged in an accout. Please, register a new account or log in in existing.
    </h3>
    <div class="flex flex-col gap-2">
        <button class="secondary min-w-full">
            Log in
        </button>
        <button id="registration-button" on:click={openModal} class="tertiary min-w-full">
            Register
        </button>
    </div>
    <dialog id="registration-button-dialog" class="rounded-2xl p-6">
        <div class="flex gap-8 min-w-full justify-between mb-4">
            <h2>Register</h2>
            <form method="dialog">
                <button>
                    <img src="close.svg" alt="close">
                </button>
            </form>
        </div>
        <div class="flex flex-col gap-4 mb-6">
            <TextField label="Username*" placeholder="GetMap"/>
            <TextField label="Password*" placeholder="Getmap@48"/>
            <TextField label="Repeat password*" placeholder="Getmap@48"/>
        </div>
        <button class="primary min-w-full">Register</button>
    </dialog>
</div>