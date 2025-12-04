function UnderGlow() {
	return (
		<div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center">
			<div className="h-full w-full rounded-full bg-radial from-[var(--hover-magenta)] to-transparent blur-3xl opacity-50" />
		</div>
	);
}

export { UnderGlow };
