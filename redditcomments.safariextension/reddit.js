window.addEventListener('keydown', handleKeydown, false);

function handleKeydown(e) {
	if(e.ctrlKey && !e.metaKey && !e.altKey && !e.shiftKey) {
		safari.self.tab.dispatchMessage('keyboard', e.which);
	}
}